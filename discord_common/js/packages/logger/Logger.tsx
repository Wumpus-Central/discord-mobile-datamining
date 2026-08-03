import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function log() {

}
function nativeLog() {

}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/logger/Logger.tsx");
class Logger {
  constructor() {
    str = global;
    if (global === undefined) {
      str = "default";
    }
    obj = Object.create(new.target.prototype);
    f100686 = obj;
    obj.logDangerously = function logDangerously(arg0) {
      const substr = [...arguments].slice();
      outer1_3("log", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items = [logger.name, "log", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
        const tmp4 = outer1_4;
      }
    };
    obj.log = function log(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      outer1_3("log", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items1 = [logger.name, "log", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
        const tmp6 = outer1_4;
      }
    };
    obj.verboseDangerously = function verboseDangerously(arg0, op, arg2, d) {
      const substr = [...arguments].slice();
      outer1_3("debug", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items = [logger.name, "debug", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
        const tmp4 = outer1_4;
      }
    };
    obj.verbose = function verbose(handleBackPress, url, channel_id) {
      const substr = [...arguments].slice();
      const items = [handleBackPress, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      outer1_3("debug", handleBackPress, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items1 = [logger.name, "debug", handleBackPress];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
        const tmp6 = outer1_4;
      }
    };
    obj.info = function info(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      outer1_3("info", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items1 = [logger.name, "info", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
        const tmp6 = outer1_4;
      }
    };
    obj.warn = function warn(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      outer1_3("warn", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items1 = [logger.name, "warn", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
        const tmp6 = outer1_4;
      }
    };
    obj.error = function error(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      logger(obj[1]).checkLogForPII.apply(items);
      outer1_3("error", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items1 = [logger.name, "error", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items1, undefined);
        }
        const tmp6 = outer1_4;
      }
    };
    obj.trace = function trace(arg0) {
      const substr = [...arguments].slice();
      outer1_3("trace", arg0, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items = [logger.name, "trace", arg0];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
        const tmp4 = outer1_4;
      }
    };
    obj.time = function time(arg0, arg1) {
      const timestamp = Date.now();
      logger.log(arg0, Date.now() - timestamp);
      return arg1();
    };
    f100686 = undefined;
    closure_1 = obj;
    f100686 = asyncGeneratorStep((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c4 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp5;
                let asyncGeneratorStep = tmp2;
                let logger;
                asyncGeneratorStep = undefined;
                const _Date2 = Date;
                logger = Date.now();
                c4 = 1;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = logger();
                return obj1;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              asyncGeneratorStep = arg1;
              const _Date = Date;
              logger.log(closure_0, Date.now() - logger + "ms");
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = asyncGeneratorStep;
              return obj;
            }
          } catch (tmp16) {
            c5 = tmp;
            throw tmp16;
          }
        }
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
      outer1_3("file-only", syncChannels, ...substr);
      if (logger.nativeLoggerEnabled) {
        if (outer1_4 != null) {
          const items = [logger.name, "file-only", syncChannels];
          HermesBuiltin.arraySpread(substr, 3);
          HermesBuiltin.apply(items, undefined);
        }
        const tmp4 = outer1_4;
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
  let closure_3 = arg0;
}
export function setNativeLogFn(arg0) {
  let closure_4 = arg0;
}
export const defaultLogFn = function defaultLogFn(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
};
export { Logger };