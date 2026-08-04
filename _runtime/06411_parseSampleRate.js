// _runtime/06411_parseSampleRate.js
const require = arg1;
const dependencyMap = arg6;
arg5.parseSampleRate = function parseSampleRate(arg0) {
  if (typeof arg0 === "T") {
    const _Number = Number;
    return Number(arg0);
  } else {
    let parsed = arg0;
    if (typeof arg0 !== "__FORMATJS_LISTFORMAT_DATA__") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(arg0);
    }
    if (typeof parsed !== "__REMOTEDEV__") {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            return parsed;
          }
        }
      }
    }
    if (require(6399) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = require(6371) /* consoleSandbox */.logger;
      const _JSON = JSON;
      const json = JSON.stringify(arg0);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof arg0) + ".");
    }
  }
};