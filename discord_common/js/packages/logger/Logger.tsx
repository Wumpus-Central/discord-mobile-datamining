// discord_common/js/packages/logger/Logger.tsx
import LoggerPIIRestrictedObjects from "LoggerPIIRestrictedObjects.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let global = function log() {};
global = function nativeLog() {};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/logger/Logger.tsx");
class Logger {
  constructor() {
    str = global;
    if (global === undefined) {
      str = "default";
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.logDangerously = function logDangerously(syncChannels) {
      const substr = [...arguments].slice();
      global("log", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items = [logger.name, "log", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
      }
    };
    obj.log = function log(syncChannels) {
      const substr = [...arguments].slice();
      const items = [syncChannels, ...substr];
      LoggerPIIRestrictedObjects.checkLogForPII.apply(items);
      global("log", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items1 = [logger.name, "log", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
    };
    obj.verboseDangerously = function verboseDangerously(syncChannels) {
      const substr = [...arguments].slice();
      global("debug", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items = [logger.name, "debug", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
      }
    };
    obj.verbose = function verbose(handleBackPress) {
      const substr = [...arguments].slice();
      const items = [handleBackPress, ...substr];
      LoggerPIIRestrictedObjects.checkLogForPII.apply(items);
      global("debug", handleBackPress, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items1 = [logger.name, "debug", handleBackPress];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
    };
    obj.info = function info(syncChannels) {
      const substr = [...arguments].slice();
      const items = [syncChannels, ...substr];
      LoggerPIIRestrictedObjects.checkLogForPII.apply(items);
      global("info", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items1 = [logger.name, "info", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
    };
    obj.warn = function warn(syncChannels) {
      const substr = [...arguments].slice();
      const items = [syncChannels, ...substr];
      LoggerPIIRestrictedObjects.checkLogForPII.apply(items);
      global("warn", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items1 = [logger.name, "warn", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
    };
    obj.error = function error(syncChannels) {
      const substr = [...arguments].slice();
      const items = [syncChannels, ...substr];
      LoggerPIIRestrictedObjects.checkLogForPII.apply(items);
      global("error", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items1 = [logger.name, "error", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
      }
    };
    obj.trace = function trace(syncChannels) {
      const substr = [...arguments].slice();
      global("trace", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
          const items = [logger.name, "trace", syncChannels];
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
    closure_0 = closure_2(async (arg0, arg1) => {
      closure_3 = tmp5;
      closure_2 = tmp2;
      closure_130_0 = closure_0;
      const _Date2 = Date;
      closure_130_1 = Date.now();
      closure_130_2 = await closure_1();
      const _Date = Date;
      closure_131_1.log(closure_130_0, Date.now() - closure_130_1 + "ms");
      return closure_130_2;
    });
    obj.timeAsync = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.fileOnly = function fileOnly(syncChannels) {
      const substr = [...arguments].slice();
      global("file-only", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (global != null) {
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
  global = arg0;
}
export function setNativeLogFn(arg0) {
  global = arg0;
}
export const defaultLogFn = function defaultLogFn(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
};
export { Logger };
