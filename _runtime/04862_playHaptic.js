// === Module 4862: playHaptic ===

// Module 4862 (playHaptic)
import react_native from "react-native" /* 17 */;
import _modDef4858 from "module_4858" /* 4858 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c2;

let obj = function _playHaptic() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let tmp5Result;
    let closure_0 = arg1;
    let closure_1 = arg2;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj = _modDef4858;
          if (obj.isEnabled()) {
            c2 = 3;
            const obj4 = { value: tmp5Result.triggerPattern(closure_0, closure_1), done: true };
            tmp5Result = _modDef4858;
            return obj4;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const Platform = react_native.Platform;

export const playHaptic = function playHaptic(arg0, arg1, arg2) {
  return obj(...arguments);
};