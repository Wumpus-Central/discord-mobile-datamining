// === Module 4420: _playHaptic ===

// Module 4420 (_playHaptic)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Platform } from "get ActivityIndicator" /* 17 */;

function _playHaptic() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg1;
    closure_1 = arg2;
    c2 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj = callback(table[2]);
            if (obj.isEnabled()) {
              c2 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = tmp6(tmp7[2]).triggerPattern(tmp4, tmp5);
              return obj1;
            } else {
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
            tmp4 = callback;
            tmp5 = table;
            tmp6 = callback;
            tmp7 = table;
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

export const playHaptic = function playHaptic(arg0, arg1, arg2) {
  const self = this;
  const apply = _playHaptic.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};