// === Module 13054: ? ===

// Module 13054
import errorCallback from "errorCallback" /* 12944 */;
import _mod12972 from "module_12972" /* 12972 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import "module_12947";
import consoleSandbox from "module_12948" /* 12948 */;
import __SENTRY_DEBUG__ from "module_12976" /* 12976 */;
import dateTimestampInSeconds from "module_12962" /* 12962 */;

errorCallback;
_mod12972;
let obj = { mechanism: { handled: false, data: { function: "trpcMiddleware" } } };

export const trpcMiddleware = function trpcMiddleware() {
  closure_0 = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp5;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            const path = closure_0.path;
            closure_129_0 = path;
            ({ next: closure_129_1, rawInput, getRawInput } = closure_0);
            const client = closure_0(12975).getClient();
            let options = client;
            if (client) {
              options = client.getOptions();
            }
            let obj5 = { procedure_path: path, procedure_type: closure_0.type };
            closure_129_2 = obj5;
            if (undefined !== closure_0.attachRpcInput) {
              let sendDefaultPii = closure_0.attachRpcInput;
            } else {
              sendDefaultPii = options;
              if (options) {
                sendDefaultPii = options.sendDefaultPii;
              }
            }
            if (sendDefaultPii) {
              if (undefined !== rawInput) {
                const normalizer2 = closure_0(12993);
                obj5.input = normalizer2.normalize(rawInput);
              }
              if (undefined !== getRawInput) {
                if (typeof getRawInput === "function") {
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  let obj6 = { value: getRawInput(), done: false };
                  return obj6;
                }
              }
            }
            const obj7 = closure_0(12975);
          }
        } else {
          if (1 === tmp8) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            const normalizer = closure_0(12993);
            closure_129_2.input = normalizer.normalize(closure_129_3);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
        closure_0(12975).withScope((setContext) => {
          setContext.setContext("trpc", closure_2);
          obj = closure_1_0(dependencyMap[10]);
          closure_0 = closure_1_2(function*(arg0) {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_2 = tmp3;
                    closure_1 = tmp7;
                    closure_129_0 = closure_0;
                    closure_129_1 = undefined;
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    const obj5 = { value: closure_1(), done: false };
                    return obj5;
                  }
                } else if (1 === tmp7) {
                  c4 = 0;
                  closure_129_2 = closure_3;
                  closure_0(dependencyMap[7]).captureException(closure_129_2, closure_2_3);
                  closure_129_0.end();
                  throw closure_129_2;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_129_1 = value;
                  (function captureIfError(ok) {
                    let tmp = typeof ok === "object";
                    if (typeof ok === "object") {
                      tmp = null !== ok;
                    }
                    if (tmp) {
                      tmp = "ok" in ok;
                    }
                    if (tmp) {
                      tmp = !ok.ok;
                    }
                    if (tmp) {
                      tmp = "error" in ok;
                    }
                    if (tmp) {
                      closure_1_0(dependencyMap[7]).captureException(ok.error, closure_1_3);
                      obj = closure_1_0(dependencyMap[7]);
                    }
                  })(closure_129_1);
                  closure_129_0.end();
                  c4 = 0;
                  c6 = 3;
                  obj = { value: closure_129_1, done: true };
                  return obj;
                }
              } catch (tmp27) {
                closure_3 = tmp27;
                if (tmp4 === c4) {
                  c6 = tmp2;
                  throw tmp27;
                } else {
                  c5 = tmp;
                }
              }
            }
          });
          return obj.startSpanManual({ name: "trpc/" + closure_0, op: "rpc.server", attributes: { [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" } }, function(arg0) {
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
        const obj3 = closure_0(12975);
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