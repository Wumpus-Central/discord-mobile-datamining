// === Module 4: logger/Logger ===

// Module 4 (logger/Logger)
import LoggerPIIRestrictedObjects from "LoggerPIIRestrictedObjects" /* 6 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

function log() {

}
function nativeLog() {

}
const result = size.fileFinishedImporting("../discord_common/js/packages/logger/Logger.tsx");
class Logger {
  constructor() {
    let str = Flux;
    if (Flux === undefined) {
      str = "default";
    }
    const obj = Object.create(new.target.prototype);
    obj.logDangerously = function logDangerously(arg0) {
      const substr = [...arguments].slice();
      log("log", arg0, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [obj.name, "log", arg0];
          HermesBuiltin.arraySpread(items, substr, 3);
          HermesBuiltin.apply(nativeLog, items, undefined);
        }
      }
    };
    obj.log = function log(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      const tmp3 = LoggerPIIRestrictedObjects;
      tmp3.checkLogForPII.apply(items);
      log("log", arg0, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [obj.name, "log", arg0];
          HermesBuiltin.arraySpread(items1, substr, 3);
          HermesBuiltin.apply(nativeLog, items1, undefined);
        }
      }
    };
    obj.verboseDangerously = function verboseDangerously(arg0) {
      const substr = [...arguments].slice();
      log("debug", arg0, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [obj.name, "debug", arg0];
          HermesBuiltin.arraySpread(items, substr, 3);
          HermesBuiltin.apply(nativeLog, items, undefined);
        }
      }
    };
    obj.verbose = function verbose(handleBackPress) {
      const substr = [...arguments].slice();
      const items = [handleBackPress, ...substr];
      const tmp3 = LoggerPIIRestrictedObjects;
      tmp3.checkLogForPII.apply(items);
      log("debug", handleBackPress, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [obj.name, "debug", handleBackPress];
          HermesBuiltin.arraySpread(items1, substr, 3);
          HermesBuiltin.apply(nativeLog, items1, undefined);
        }
      }
    };
    obj.info = function info(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      const tmp3 = LoggerPIIRestrictedObjects;
      tmp3.checkLogForPII.apply(items);
      log("info", arg0, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [obj.name, "info", arg0];
          HermesBuiltin.arraySpread(items1, substr, 3);
          HermesBuiltin.apply(nativeLog, items1, undefined);
        }
      }
    };
    obj.warn = function warn(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      const tmp3 = LoggerPIIRestrictedObjects;
      tmp3.checkLogForPII.apply(items);
      log("warn", arg0, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [obj.name, "warn", arg0];
          HermesBuiltin.arraySpread(items1, substr, 3);
          HermesBuiltin.apply(nativeLog, items1, undefined);
        }
      }
    };
    obj.error = function error(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      const tmp3 = LoggerPIIRestrictedObjects;
      tmp3.checkLogForPII.apply(items);
      log("error", arg0, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items1 = [obj.name, "error", arg0];
          HermesBuiltin.arraySpread(items1, substr, 3);
          HermesBuiltin.apply(nativeLog, items1, undefined);
        }
      }
    };
    obj.trace = function trace(arg0) {
      const substr = [...arguments].slice();
      log("trace", arg0, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [obj.name, "trace", arg0];
          HermesBuiltin.arraySpread(items, substr, 3);
          HermesBuiltin.apply(nativeLog, items, undefined);
        }
      }
    };
    obj.time = function time(arg0, fn) {
      const timestamp = Date.now();
      const tmp2 = fn();
      obj.log(arg0, Date.now() - timestamp);
      return tmp2;
    };
    let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
      let c4;
      let c5;
      let closure_3;
      closure_0 = arg0;
      const value = tmp;
      const _Date2 = Date;
      let closure_1 = Date.now();
      await closure_1();
      const _Date = Date;
      closure_131_1.log(closure_0, Date.now() - closure_1 + "ms");
      return value;
    });
    obj.timeAsync = function() {
      return closure_0(...arguments);
    };
    obj.fileOnly = function fileOnly(syncChannels) {
      const substr = [...arguments].slice();
      log("file-only", syncChannels, ...substr);
      if (obj.nativeLoggerEnabled) {
        if (nativeLog != null) {
          const items = [obj.name, "file-only", syncChannels];
          HermesBuiltin.arraySpread(items, substr, 3);
          HermesBuiltin.apply(nativeLog, items, undefined);
        }
      }
    };
    obj.name = str;
    obj.nativeLoggerEnabled = false;
    return obj;
  }
  enableNativeLogger(nativeLoggerEnabled) {
    this.nativeLoggerEnabled = nativeLoggerEnabled;
  }
}
const prototype = Logger.prototype;

export function setLogFn(arg0) {
  log = arg0;
}
export function setNativeLogFn(arg0) {
  nativeLog = arg0;
}
export const defaultLogFn = function defaultLogFn(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
};
export { Logger };