// === Module 810: trpcMiddleware ===

// Module 810 (trpcMiddleware)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c5, c6;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = { mechanism: { handled: false, type: "auto.rpc.trpc.middleware" } };

export const trpcMiddleware = function trpcMiddleware() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let c1;
    let getRawInput;
    let rawInput;
    let tmp25;
    let value;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const str2 = "__sentry_override_normalization_depth__";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let obj5;
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
              let sendDefaultPii;
              let closure_2 = tmp25;
              c1 = undefined;
              obj5 = undefined;
              closure_3 = undefined;
              const path = closure_0.path;
              ({ next: c1, rawInput, getRawInput } = closure_0);
              const type = closure_0.type;
              const obj8 = closure_0(dependencyMap[2]);
              const client = obj8.getClient();
              let options;
              if (client != null) {
                options = client.getOptions();
              }
              obj5 = { procedure_path: path, procedure_type: type };
              let normalizeDepth;
              const addNonEnumerableProperty = closure_0(dependencyMap[3]).addNonEnumerableProperty;
              const tmp14 = closure_0(dependencyMap[3]);
              if (options != null) {
                normalizeDepth = options.normalizeDepth;
              }
              c1 = normalizeDepth;
              if (normalizeDepth == null) {
                c1 = 5;
              }
              const result = addNonEnumerableProperty(obj5, "__sentry_override_normalization_depth__", 1 + c1);
              if (undefined !== closure_0.attachRpcInput) {
                sendDefaultPii = closure_0.attachRpcInput;
              } else if (options != null) {
                sendDefaultPii = options.sendDefaultPii;
              }
              if (sendDefaultPii) {
                if (undefined !== rawInput) {
                  const normalizer2 = closure_0(dependencyMap[4]);
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
            }
          } else if (1 === tmp4) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let tmp6 = closure_3;
            closure_3 = value;
            const normalizer = closure_0(dependencyMap[4]);
            obj5.input = normalizer.normalize(closure_3);
            c4 = 0;
          }
          let obj3 = closure_0(dependencyMap[2]);
          c6 = 3;
          const obj7 = {
            value: obj3.withIsolationScope((setContext) => {
                    setContext.setContext("trpc", closure_2);
                    const tmp2 = closure_2_0(closure_2_1[5]);
                    obj = { name: "trpc/" + closure_0, op: "rpc.server", attributes: { [closure_2_0(closure_2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [closure_2_0(closure_2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" }, forceTransaction: forceTransaction.forceTransaction };
                    const startSpanManual = tmp2.startSpanManual;
                    closure_0 = closure_2_2(function*(arg0) {
                      let tmp;
                      let value;
                      function captureIfError(ok) {
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
                          obj = closure_1_0(closure_1_1[1]);
                          obj.captureException(ok.error, closure_1_3);
                        }
                      }
                      closure_0 = arg0;
                      if (c6 === 2) {
                        c6 = 3;
                        const str = "Generator functions may not be called on executing generators";
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "IconComponent", done: null };
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
                              closure_2 = tmp;
                              value = undefined;
                              c4 = 1;
                              c5 = 2;
                              c6 = 1;
                              const obj5 = { value: value(), done: false };
                              return obj5;
                            }
                          } else if (1 === c5) {
                            c4 = 0;
                            closure_2 = closure_3;
                            const obj3 = closure_3_0(closure_3_1[1]);
                            const captureExceptionResult = obj3.captureException(closure_2, closure_3_3);
                            closure_0.end();
                            throw closure_2;
                          } else if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c6 = 3;
                            const obj6 = { value, done: true };
                            return obj6;
                          } else {
                            captureIfError(value);
                            closure_0.end();
                            c4 = 0;
                            c6 = 3;
                            obj = { value, done: true };
                            return obj;
                          }
                        } catch (tmp24) {
                          closure_3 = tmp24;
                          if (0 === c4) {
                            c6 = 3;
                            throw tmp24;
                          } else {
                            c5 = 1;
                          }
                        }
                      }
                    });
                    return startSpanManual(obj, function(arg0) {
                      return closure_0(...arguments);
                    });
                  }),
            done: true
          };
          return obj7;
        } catch (tmp24) {
          tmp25 = c4;
          if (0 === c4) {
            c6 = 3;
            throw tmp24;
          } else {
            c5 = 1;
          }
        }
      }
    }
  });
  return function(arg0) {
    return closure_0(...arguments);
  };
};