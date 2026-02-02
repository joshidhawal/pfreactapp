import { LogLevel } from "../types/types";

class Logger {
  private static env: string;
  private static LOG_LEVEL: number;

  constructor() {
    Logger.env = import.meta.env.NODE_ENV || "development";
    Logger.LOG_LEVEL =
      import.meta.env.LOG_LEVEL ||
      (Logger.env == "development"
        ? (Logger.LOG_LEVEL = 1)
        : (Logger.LOG_LEVEL = 3));
  }

  // DEBUG = 1,
  // INFO = 2,
  // WARN = 3,
  // ERROR = 4,
  // NONE = 5,

  static debug(message: string, data?: object) {
    if (Logger.LOG_LEVEL < LogLevel.ERROR) {
      console.log("[DEBUG]", Date().toString, message);
      if (data) {
        console.table(data);
      }
    }
  }

  static info(message: string, data?: object) {
    if (Logger.LOG_LEVEL < LogLevel.WARN) {
      console.log("[INFO]", Date().toString, message);
      if (data) {
        console.table(data);
      }
    }
  }

  static warn(message: string, data?: object) {
    if (Logger.LOG_LEVEL < LogLevel.ERROR) {
      console.warn("[WARN]", Date().toString, message);
      if (data) {
        console.table(data);
      }
    }
  }

  static error(message: string, data?: object) {
    if (Logger.LOG_LEVEL < LogLevel.NONE) {
      console.error("[ERROR]", Date().toString, message);
      if (data) {
        console.table(data);
      }
    }
  }
}

export default Logger;
