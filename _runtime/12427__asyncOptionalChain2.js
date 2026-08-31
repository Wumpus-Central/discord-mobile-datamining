// === Module 12427: _asyncOptionalChain2 ===

// Module 12427 (_asyncOptionalChain2)
import closure_0 from "asyncGeneratorStep" /* 5 */;

function _asyncOptionalChain2() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === closure_2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp4;
              closure_2 = undefined;
              c3 = undefined;
              closure_4 = undefined;
              let callback;
              c1 = undefined;
              closure_2 = closure_0[0];
              c3 = 1;
              if (c3 < closure_0.length) {
                closure_4 = closure_0[c3];
                callback = closure_0[c3 + 1];
                c3 = c3 + 2;
                if ("optionalAccess" === closure_4) {
                  if (null == closure_2) {
                    c3 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                }
                if ("access" !== closure_4) {
                  if ("optionalAccess" !== closure_4) {
                    let tmp22 = "call" !== closure_4;
                    if (tmp22) {
                      tmp22 = "optionalCall" !== closure_4;
                    }
                    if (!tmp22) {
                      closure_2 = 2;
                      c3 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = callback(() => {
                        const items = [c1, ...HermesBuiltin.copyRestArgs()];
                        return closure_2.call.apply(items);
                      });
                      return obj1;
                    }
                  }
                }
                c1 = closure_2;
                closure_2 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(closure_2);
                return obj2;
              }
              c3 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = closure_2;
              return obj3;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_2 = arg1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = arg1;
            c1 = undefined;
          }
        } catch (tmp31) {
          c3 = tmp;
          throw tmp31;
        }
      }
    })();
  });
  closure_1 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

export const _asyncOptionalChain = function _asyncOptionalChain(closure_0) {
  const self = this;
  const apply = _asyncOptionalChain2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};