// _runtime/metro/12903__.js
import errorCallback from "../12793_errorCallback.js";
import _mod12821 from "12821__.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import "module_12796";
import consoleSandbox from "12797__.js";
import __SENTRY_DEBUG__ from "12825__.js";
import dateTimestampInSeconds from "12811__.js";

errorCallback;
_mod12821;
let obj = { mechanism: { handled: false, data: { function: "trpcMiddleware" } } };

export const trpcMiddleware = function trpcMiddleware() {
  closure_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
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
            const client = closure_0(12824).getClient();
            let options = client;
            if (client) {
              options = client.getOptions();
            }
            let obj1 = { procedure_path: path, procedure_type: closure_0.type };
            closure_129_2 = obj1;
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
                const normalizer2 = closure_0(12842);
                obj1.input = normalizer2.normalize(rawInput);
              }
              if (undefined !== getRawInput) {
                if (typeof getRawInput === "function") {
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  let obj2 = { value: getRawInput(), done: false };
                  return obj2;
                }
              }
            }
            const obj7 = closure_0(12824);
          }
        } else {
          if (1 === tmp8) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            const normalizer = closure_0(12842);
            closure_129_2.input = normalizer.normalize(closure_129_3);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
        obj2 = closure_0(12824);
        obj2.withScope((setContext) => {
          setContext.setContext("trpc", closure_2);
          closure_1_0(dependencyMap[10]);
          obj = {
            name: "trpc/" + closure_0,
            op: "rpc.server",
            attributes: {
              [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route",
              [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc",
            },
          };
          closure_0 = closure_1_2(function* (arg0, value) {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_2 = tmp3;
                    closure_1 = tmp7;
                    closure_129_0 = closure_0;
                    closure_129_1 = undefined;
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    const obj1 = { value: closure_1(), done: false };
                    return obj1;
                  }
                } else if (1 === tmp7) {
                  c4 = 0;
                  closure_129_2 = closure_3;
                  let obj2 = closure_0(dependencyMap[7]);
                  obj2.captureException(closure_129_2, closure_2_3);
                  closure_129_0.end();
                  throw closure_129_2;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  obj2 = { value, done: true };
                  return obj2;
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
          return obj.startSpanManual(obj, function (arg0) {
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
  return function (arg0) {
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
