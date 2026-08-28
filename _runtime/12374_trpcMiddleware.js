// _runtime/12374_trpcMiddleware.js
import errorCallback from "12264_errorCallback.js";
import SyncPromise from "12292_SyncPromise.js";
import closure_2 from "00005_asyncGeneratorStep.js";
import __SENTRY_DEBUG__ from "metro/12267___SENTRY_DEBUG__.js";
import consoleSandbox from "12268_consoleSandbox.js";
import dateTimestampInSeconds from "12282_dateTimestampInSeconds.js";

errorCallback;
SyncPromise;
let closure_3 = { mechanism: { handled: false, data: { function: "trpcMiddleware" } } };

export const trpcMiddleware = function trpcMiddleware() {
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = tmp3;
              c1 = tmp5;
              let path;
              c1 = undefined;
              obj1 = undefined;
              closure_3 = undefined;
              path = path.path;
              ({ next: c1, rawInput, getRawInput } = path);
              const client = lib(closure_2_1[8]).getClient();
              let options = client;
              if (client) {
                options = client.getOptions();
              }
              obj1 = { procedure_path: null, procedure_type: null };
              obj1[0] = path;
              obj1[1] = path.type;
              if (undefined !== lib.attachRpcInput) {
                let sendDefaultPii = lib.attachRpcInput;
              } else {
                sendDefaultPii = options;
                if (options) {
                  sendDefaultPii = options.sendDefaultPii;
                }
              }
              if (sendDefaultPii) {
                if (undefined !== rawInput) {
                  let obj3 = lib(closure_2_1[9]);
                  obj1.input = obj3.normalize(rawInput);
                }
                if (undefined !== getRawInput) {
                  if (typeof getRawInput === "function") {
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = getRawInput();
                    return obj2;
                  }
                }
              }
              const obj9 = lib(closure_2_1[8]);
            }
          } else {
            if (1 === tmp8) {
              c4 = 0;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_3 = arg1;
              obj = lib(closure_2_1[9]);
              obj1.input = obj.normalize(closure_3);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
          lib(closure_2_1[8]).withScope((setContext) => {
            setContext.setContext("trpc", obj1);
            let obj = path(_undefined[10]);
            obj = { name: "trpc/" + closure_0, op: "rpc.server", attributes: { [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" } };
            closure_0 = undefined;
            closure_0 = obj1((arg0) => {
              closure_0 = arg0;
              c5 = 0;
              c6 = 0;
              c4 = 0;
              return (/* F122880 */ function*() { ... })();
            });
            return obj.startSpanManual(obj, function(arg0) {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            });
          });
          c6 = 3;
          const obj5 = lib(closure_2_1[8]);
        } catch (tmp24) {
          closure_3 = tmp24;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp24;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  return function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
};