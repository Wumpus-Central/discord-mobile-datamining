// === Module 4535: _playHaptic ===

// Module 4535 (_playHaptic)
import _modDef4531 from "module_4531" /* 4531 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _playHaptic(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
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
      c2 = 2;
      if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        obj = _modDef4531;
        if (obj.isEnabled()) {
          c2 = 3;
          const obj1 = { value: tmp6(tmp7[2]).triggerPattern(tmp4, tmp5), done: true };
          return obj1;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
        tmp4 = closure_0;
        tmp5 = closure_1;
        tmp6 = importDefault;
        tmp7 = dependencyMap;
      }
    } catch (tmp8) {
      c2 = tmp;
      throw tmp8;
    }
  }
};
const Platform = fn(17).Platform;

export const playHaptic = function playHaptic(arg0, arg1, arg2) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};