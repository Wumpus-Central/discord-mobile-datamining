// === Module 799: trpcMiddleware ===

// Module 799 (trpcMiddleware)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = { mechanism: { handled: false, type: "auto.rpc.trpc.middleware" } };

export const trpcMiddleware = function trpcMiddleware() {
  closure_0 = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            closure_3 = tmp3;
            closure_2 = tmp28;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            const path = closure_0.path;
            closure_130_0 = path;
            ({ next: closure_130_1, rawInput, getRawInput } = closure_0);
            const client = closure_0(713).getClient();
            let options;
            if (client != null) {
              options = client.getOptions();
            }
            let obj1 = { procedure_path: path, procedure_type: closure_0.type };
            closure_130_2 = obj1;
            let obj2 = closure_0(687);
            let normalizeDepth;
            if (options != null) {
              normalizeDepth = options.normalizeDepth;
            }
            c1 = normalizeDepth;
            if (normalizeDepth == null) {
              c1 = 5;
            }
            const result = obj2.addNonEnumerableProperty(obj1, "__sentry_override_normalization_depth__", 1 + c1);
            if (undefined !== closure_0.attachRpcInput) {
              let sendDefaultPii = closure_0.attachRpcInput;
            } else if (options != null) {
              sendDefaultPii = options.sendDefaultPii;
            }
            if (sendDefaultPii) {
              if (undefined !== rawInput) {
                const normalizer2 = closure_0(730);
                obj1.input = normalizer2.normalize(rawInput);
              }
              if (undefined !== getRawInput) {
                if (typeof getRawInput === "function") {
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  obj2 = { value: getRawInput(), done: false };
                  return obj2;
                }
              }
            }
            const obj8 = closure_0(713);
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_3 = value;
            const normalizer = closure_0(730);
            closure_130_2.input = normalizer.normalize(closure_130_3);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
        closure_0(713).withIsolationScope((setContext) => {
          setContext.setContext("trpc", closure_2);
          closure_0(731);
          let obj = { name: "trpc/" + closure_0, op: "rpc.server", attributes: { [closure_2_0(closure_2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [closure_2_0(closure_2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" }, forceTransaction: closure_1_0.forceTransaction };
          closure_0 = closure_2(function*(arg0) {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                  let obj2 = closure_3_0(734);
                  obj2.captureException(closure_129_2, closure_3_3);
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
                      closure_1_0(dependencyMap[1]).captureException(ok.error, closure_1_3);
                      const obj = closure_1_0(dependencyMap[1]);
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
        const obj4 = closure_0(713);
      } catch (tmp27) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp27;
        } else {
          c5 = tmp;
        }
        tmp28 = c4;
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