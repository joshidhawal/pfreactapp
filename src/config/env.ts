import type { configTypes } from "../types/types.js";
import Logger from "../utils/logger.js";
import { envSchema } from "../validators/env.schema.js";

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  Logger.error(`Invalid environment variables: ${parsedEnv.error.format()}`);
  throw new Error("Environment validation failed");
}

const config: configTypes = {
  VITE_API_URL: parsedEnv.data.VITE_API_URL,
  VITE_API_PORT: parsedEnv.data.VITE_API_PORT,
  LOG_LEVEL: parsedEnv.data.LOG_LEVEL,
};

export default config;
