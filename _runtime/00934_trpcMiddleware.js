// === Module 934: trpcMiddleware ===

// Module 934 (trpcMiddleware)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = { mechanism: { handled: false, type: "auto.rpc.trpc.middleware" } };

export const trpcMiddleware = function trpcMiddleware() {
  closure_0 = asyncGeneratorStep((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_3 = tmp3;
              obj1 = tmp28;
              let path;
              c1 = undefined;
              obj1 = undefined;
              closure_3 = undefined;
              path = path.path;
              ({ next: c1, rawInput, getRawInput } = path);
              const client = lib(dependencyMap[2]).getClient();
              let options;
              if (client != null) {
                options = client.getOptions();
              }
              obj1 = { procedure_path: null, procedure_type: null };
              obj1[0] = path;
              obj1[1] = path.type;
              let obj2 = lib(dependencyMap[3]);
              let normalizeDepth;
              if (options != null) {
                normalizeDepth = options.normalizeDepth;
              }
              c1 = normalizeDepth;
              if (normalizeDepth == null) {
                c1 = 5;
              }
              const result = obj2.addNonEnumerableProperty(obj1, "__sentry_override_normalization_depth__", 1 + c1);
              if (undefined !== lib.attachRpcInput) {
                let sendDefaultPii = lib.attachRpcInput;
              } else if (options != null) {
                sendDefaultPii = options.sendDefaultPii;
              }
              if (sendDefaultPii) {
                if (undefined !== rawInput) {
                  const normalizer2 = lib(dependencyMap[4]);
                  obj1.input = normalizer2.normalize(rawInput);
                }
                if (undefined !== getRawInput) {
                  if (typeof getRawInput === "function") {
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    obj2 = { value: null, done: false };
                    obj2[0] = getRawInput();
                    return obj2;
                  }
                }
              }
              const obj8 = lib(dependencyMap[2]);
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_3 = arg1;
              const normalizer = lib(dependencyMap[4]);
              obj1.input = normalizer.normalize(closure_3);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          lib(dependencyMap[2]).withIsolationScope((setContext) => {
            setContext.setContext("trpc", obj1);
            path(closure_2_1[5]);
            let obj = { name: "trpc/" + path, op: "rpc.server", attributes: { [closure_2_0(closure_2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [closure_2_0(closure_2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" }, forceTransaction: path.forceTransaction };
            path = closure_2_2((arg0) => {
              closure_0 = arg0;
              c5 = 0;
              c6 = 0;
              c4 = 0;
              return (/* F120947 */ function*() { ... })();
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
          const obj4 = lib(dependencyMap[2]);
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