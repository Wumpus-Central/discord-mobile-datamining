// === Module 12922: _asyncOptionalChain2 ===

// Module 12922 (_asyncOptionalChain2)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_1 = async function _asyncOptionalChain2(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          closure_129_0 = length;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = length[0];
          closure_129_3 = 1;
          if (closure_129_3 < length.length) {
            closure_129_4 = closure_129_0[closure_129_3];
            closure_129_5 = closure_129_0[closure_129_3 + 1];
            closure_129_3 = closure_129_3 + 2;
            if ("optionalAccess" === closure_129_4) {
              if (null == closure_129_2) {
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            if ("access" !== closure_129_4) {
              if ("optionalAccess" !== closure_129_4) {
                let tmp22 = "call" !== closure_129_4;
                if (tmp22) {
                  tmp22 = "optionalCall" !== closure_129_4;
                }
                if (!tmp22) {
                  c2 = 2;
                  c3 = 1;
                  const obj1 = {
                    value: closure_129_5(() => {
                                      const items = [closure_1_1, ...HermesBuiltin.copyRestArgs()];
                                      return closure_1_2.call.apply(items);
                                    }),
                    done: false
                  };
                  return obj1;
                }
              }
            }
            closure_129_1 = closure_129_2;
            c2 = 1;
            c3 = 1;
            const obj2 = { value: closure_129_5(closure_129_2), done: false };
            return obj2;
          }
          c3 = 3;
          const obj3 = { value: closure_129_2, done: true };
          return obj3;
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_2 = value;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_2 = value;
        closure_129_1 = undefined;
      }
    } catch (tmp31) {
      c3 = tmp;
      throw tmp31;
    }
  }
};

export const _asyncOptionalChain = function _asyncOptionalChain(arg0) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};