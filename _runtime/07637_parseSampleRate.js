// === Module 7637: parseSampleRate ===

// Module 7637 (parseSampleRate)
import consoleSandbox from "consoleSandbox" /* 7597 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7625 */;

require = arg1;
const dependencyMap = arg6;
arg5.parseSampleRate = function parseSampleRate(flag) {
  if (typeof flag === "boolean") {
    const _Number = Number;
    return Number(flag);
  } else {
    let parsed = flag;
    if (typeof flag === "string") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(flag);
    }
    if (typeof parsed === "number") {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            return parsed;
          }
        }
      }
    }
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = consoleSandbox.logger;
      const _JSON = JSON;
      const json = JSON.stringify(flag);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof flag) + ".");
    }
  }
};