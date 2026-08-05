// _runtime/00934_trpcMiddleware.js
import asyncGeneratorStep from "createChildOrRootSpan";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = { mechanism: { handled: false, type: "auto.rpc.trpc.middleware" } };

export const trpcMiddleware = function trpcMiddleware() {
  let closure_0;
  closure_0 = asyncGeneratorStep((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let c1;
      let getRawInput;
      let rawInput;
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
              let closure_3 = tmp3;
              let obj1 = tmp28;
              let path;
              c1 = undefined;
              obj1 = undefined;
              closure_3 = undefined;
              path = path.path;
              ({ next: c1, rawInput, getRawInput } = path);
              const client = lib(outer2_1[2]).getClient();
              let options;
              if (client != null) {
                options = client.getOptions();
              }
              obj1 = { procedure_path: null, procedure_type: null };
              obj1[0] = path;
              obj1[1] = path.type;
              let obj3 = lib(outer2_1[3]);
              let normalizeDepth;
              if (options != null) {
                normalizeDepth = options.normalizeDepth;
              }
              c1 = normalizeDepth;
              if (normalizeDepth == null) {
                c1 = 5;
              }
              const result = obj3.addNonEnumerableProperty(obj1, "__sentry_override_normalization_depth__", 1 + c1);
              if (undefined !== lib.attachRpcInput) {
                let sendDefaultPii = lib.attachRpcInput;
              } else if (options != null) {
                sendDefaultPii = options.sendDefaultPii;
              }
              if (sendDefaultPii) {
                if (undefined !== rawInput) {
                  obj1.input = lib(outer2_1[4]).normalize(rawInput);
                  const obj5 = lib(outer2_1[4]);
                }
                if (undefined !== getRawInput) {
                  if (typeof getRawInput === "function") {
                    let c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = getRawInput();
                    return obj2;
                  }
                }
              }
              const obj10 = lib(outer2_1[2]);
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_3 = arg1;
              obj = lib(outer2_1[4]);
              obj1.input = obj.normalize(closure_3);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
          lib(outer2_1[2]).withIsolationScope((setContext) => {
            setContext.setContext("trpc", obj1);
            let obj = path(outer2_1[5]);
            obj = { name: "trpc/" + path, op: "rpc.server", attributes: { [outer2_0(outer2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [outer2_0(outer2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" }, forceTransaction: path.forceTransaction };
            path = undefined;
            path = outer2_2((arg0) => {
              let closure_0 = arg0;
              let c5 = 0;
              let c6 = 0;
              let c4 = 0;
              return (/* F119571 */ function*() { ... })();
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
          const obj6 = lib(outer2_1[2]);
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