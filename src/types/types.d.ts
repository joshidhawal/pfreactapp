export enum LogLevel {
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  NONE = 5,
}

export type configTypes = {
  VITE_API_URL: parsedEnv.data.VITE_API_URL;
  VITE_API_PORT: parsedEnv.data.VITE_API_PORT;
  LOG_LEVEL: parsedEnv.data.LOG_LEVEL;
};

export interface RequestConfig {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
}

export type RequestInterceptor = (
  config: RequestConfig,
) => RequestConfig | Promise<RequestConfig>;

export type ResponseInterceptor = (
  response: Response,
) => Response | Promise<Response> | void | Promise<void>;

interface ApiClientOptions {
  baseURL?: string;
}

// export type AuthContextType = {
//   token: string | null;
//   refreshToken: string | null;
//   username: string | null;
//   loggedinTime: string;
//   isAuthenticated: boolean;
// };

export type AuthContextType = {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
};
