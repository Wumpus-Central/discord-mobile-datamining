// _runtime/metro/12867__.js
import _mod12827 from "12827__.js";
import _mod12855 from "12855__.js";

require = arg1;
const dependencyMap = arg6;

export const parseSampleRate = function parseSampleRate(flag) {
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
    if (_mod12855.DEBUG_BUILD) {
      const logger = _mod12827.logger;
      const _JSON = JSON;
      const json = JSON.stringify(flag);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      logger.warn(
        "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " +
          json +
          " of type " +
          JSON.stringify(typeof flag) +
          ".",
      );
    }
  }
};
