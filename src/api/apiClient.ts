import type {
  ApiClientOptions,
  RequestConfig,
  RequestInterceptor,
  ResponseInterceptor,
} from "../types/types";

const BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
  baseURL: string;
  requestInterceptors: RequestInterceptor[];
  responseInterceptors: ResponseInterceptor[];

  constructor({ baseURL = BASE_URL }: Partial<ApiClientOptions> = {}) {
    this.baseURL = baseURL;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  addRequestInterceptor(fn: RequestInterceptor) {
    this.requestInterceptors.push(fn);
  }

  addResponseInterceptor(fn: ResponseInterceptor) {
    this.responseInterceptors.push(fn);
  }

  async request<T = any>(
    path: string,
    { method = "GET", headers = {}, body }: RequestConfig = {}
  ): Promise<T> {
    let config: RequestConfig = { method, headers, body };

    for (const interceptor of this.requestInterceptors) {
      config = (await interceptor(config)) || config;
    }

    const token = localStorage.getItem("token");
    const finalHeaders = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...config.headers,
    };

    const response = await fetch(`${this.baseURL}${path}`, {
      ...config,
      headers: finalHeaders,
    });

    for (const interceptor of this.responseInterceptors) {
      await interceptor(response);
    }

    // Throw on non-OK responses
    if (!response.ok) {
      let errorBody: any;

      try {
        errorBody = await response.json();
      } catch {
        errorBody = await response.text();
      }

      const error: any = new Error(
        (errorBody as any)?.message || response.statusText
      );
      error.status = response.status;
      error.body = errorBody;
      throw error;
    }

    // Handle no JSON body (204, empty responses)
    try {
      return (await response.json()) as T;
    } catch {
      return null as T;
    }
  }

  get<T>(path: string, options: RequestConfig = {}) {
    return this.request<T>(path, { ...options, method: "GET" });
  }

  post<T>(path: string, body: any, options: RequestConfig = {}) {
    return this.request<T>(path, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put<T>(path: string, body: any, options: RequestConfig = {}) {
    return this.request<T>(path, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  patch<T>(path: string, body: any, options: RequestConfig = {}) {
    return this.request<T>(path, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  delete<T>(path: string, options: RequestConfig = {}) {
    return this.request<T>(path, { ...options, method: "DELETE" });
  }
}

const api = new ApiClient();
export default api;
