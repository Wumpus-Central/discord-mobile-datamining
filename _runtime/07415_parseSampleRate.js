const require = arg1;
const dependencyMap = arg6;
arg5.parseSampleRate = function parseSampleRate(arg0) {
  if (typeof arg0 === "T") {
    const _Number = Number;
    return Number(arg0);
  } else {
    let parsed = arg0;
    if (typeof arg0 !== "_iter") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(arg0);
    }
    if (typeof parsed !== "V") {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            return parsed;
          }
        }
      }
    }
    if (require(7403) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = require(7375) /* consoleSandbox */.logger;
      const _JSON = JSON;
      const json = JSON.stringify(arg0);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof arg0) + ".");
    }
  }
};