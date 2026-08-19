// === Module 4: log ===

// Module 4 (log)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function log() {

}
function nativeLog() {

}
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/logger/Logger.tsx");
class Logger {
  constructor() {
    str = global;
    if (global === undefined) {
      str = "default";
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.logDangerously = function logDangerously(arg0) {
      const substr = [...arguments].slice();
      log("log", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [logger.name, "log", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
      }
    };
    obj.log = function log(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      log("log", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [logger.name, "log", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
      const tmp2 = logger(obj[1]);
    };
    obj.verboseDangerously = function verboseDangerously(arg0, op, arg2, d) {
      const substr = [...arguments].slice();
      log("debug", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [logger.name, "debug", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
      }
    };
    obj.verbose = function verbose(handleBackPress, url, channel_id) {
      const substr = [...arguments].slice();
      const items = [handleBackPress, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      log("debug", handleBackPress, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [logger.name, "debug", handleBackPress];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
      const tmp2 = logger(obj[1]);
    };
    obj.info = function info(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      log("info", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [logger.name, "info", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
      const tmp2 = logger(obj[1]);
    };
    obj.warn = function warn(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      log("warn", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [logger.name, "warn", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
      const tmp2 = logger(obj[1]);
    };
    obj.error = function error(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      log("error", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [logger.name, "error", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
      const tmp2 = logger(obj[1]);
    };
    obj.trace = function trace(arg0) {
      const substr = [...arguments].slice();
      log("trace", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [logger.name, "trace", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
      }
    };
    obj.time = function time(arg0, fn) {
      const timestamp = Date.now();
      logger.log(arg0, Date.now() - timestamp);
      return fn();
    };
    closure_0 = undefined;
    closure_1 = obj;
    closure_0 = closure_2((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c4 = 0;
      c5 = 0;
      return (function*(arg0, arg1) {
        closure_3 = tmp5;
        const _Date2 = Date;
        const logger = Date.now();
        closure_2 = yield logger();
        const _Date = Date;
        logger.log(closure_0, Date.now() - logger + "ms");
        return closure_2;
      })();
    });
    obj.timeAsync = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.fileOnly = function fileOnly(syncChannels, existingEvents) {
      const substr = [...arguments].slice();
      log("file-only", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [logger.name, "file-only", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
      }
    };
    obj.name = str;
    obj.nativeLoggerEnabled = false;
    return obj;
  }
}
Logger.prototype["enableNativeLogger"] = function enableNativeLogger(nativeLoggerEnabled) {
  this.nativeLoggerEnabled = nativeLoggerEnabled;
};

export function setLogFn(arg0) {
  closure_3 = arg0;
}
export function setNativeLogFn(arg0) {
  closure_4 = arg0;
}
export const defaultLogFn = function defaultLogFn(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
};
export { Logger };