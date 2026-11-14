// _runtime/01723_logger.js

export const logger = {
  warn(arg0) {
    console.warn("[Worklets] " + arg0);
  },
  error(arg0) {
    console.error("[Worklets] " + arg0);
  },
};
