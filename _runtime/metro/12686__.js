// === Module 12686: ? ===

// Module 12686
import _mod12604 from "module_12604" /* 12604 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import registerSpanErrorInstrumentation from "module_12576" /* 12576 */;
import "module_12579";
import CONSOLE_LEVELS from "module_12580" /* 12580 */;
import DEBUG_BUILD from "module_12608" /* 12608 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12594 */;

let c5, c6;

_mod12604;
let obj = { mechanism: { handled: false, data: { function: "trpcMiddleware" } } };

export const trpcMiddleware = function trpcMiddleware() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let c1;
    let fn;
    let getRawInput;
    let rawInput;
    let tmp;
    let value;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
      let closure_3;
      try {
        let closure_2;
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
            closure_2 = tmp;
            c1 = undefined;
            closure_3 = undefined;
            const path = closure_0.path;
            ({ next: c1, rawInput, getRawInput } = closure_0);
            const type = closure_0.type;
            const obj8 = closure_0(dependencyMap[8]);
            const client = obj8.getClient();
            const options = client && client.getOptions();
            obj5 = { procedure_path: path, procedure_type: type };
            value = closure_0.attachRpcInput;
            if (undefined !== value) {
              value = closure_0.attachRpcInput;
            } else {
              value = options && options.sendDefaultPii;
            }
            if (value) {
              if (undefined !== rawInput) {
                const normalizer2 = closure_0(dependencyMap[9]);
                value = normalizer2.normalize(rawInput);
                obj5.input = value;
              }
              if (undefined !== getRawInput) {
                if (typeof getRawInput === "function") {
                  c4 = 1;
                  value = getRawInput();
                  c5 = 2;
                  c6 = 1;
                  let obj6 = { value, done: false };
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
          let tmp6 = closure_2;
          closure_3 = value;
          value = obj5;
          const normalizer = closure_0(dependencyMap[9]);
          obj5.input = normalizer.normalize(closure_3);
          c4 = 0;
        }
        let obj3 = closure_0(dependencyMap[8]);
        value = (setContext) => {
          setContext.setContext("trpc", closure_2);
          const tmp2 = closure_1_0(fn[10]);
          obj = { name: "trpc/" + closure_0, op: "rpc.server", attributes: { [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" } };
          const startSpanManual = tmp2.startSpanManual;
          closure_0 = closure_1_2(function*(arg0) {
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
                obj = closure_1_0(closure_1_1[7]);
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
                  const obj3 = closure_0(fn[7]);
                  const captureExceptionResult = obj3.captureException(closure_2, closure_2_3);
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
        };
        c6 = 3;
        const obj7 = { value: obj3.withScope(value), done: true };
        return obj7;
      } catch (tmp18) {
        closure_3 = tmp18;
        if (0 === c4) {
          c6 = 3;
          throw tmp18;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return function(arg0) {
    return closure_0(...arguments);
  };
};