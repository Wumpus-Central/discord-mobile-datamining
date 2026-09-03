// === Module 9688: useLazyAPIPromise ===

// Module 9688 (useLazyAPIPromise)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("utils/LazyAPIPromise.tsx");

export default function useLazyAPIPromise(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  function _execFn() {
    const self = this;
    const tmp = callback(function*() {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let aPIError = tmp3;
              closure_0 = tmp7;
              closure_0 = undefined;
              aPIError = undefined;
              closure_1_2(true);
              v0(null);
              v0 = 1;
              c4 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0();
              return obj1;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            aPIError = new closure_1_0(closure_1_1[3]).APIError(callback);
            if (aPIError != null) {
              tmp25(aPIError);
            }
            v0(closure_1_1);
            callback(false);
            c5 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            callback(false);
            v0(null);
            v0 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_0;
            return obj;
          }
        } catch (tmp41) {
          callback = tmp41;
          if (tmp4 === v0) {
            c5 = tmp2;
            throw tmp41;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback(_execFn.useState(false), 2);
  closure_2 = tmp[1];
  const tmp2 = callback(_execFn.useState(null), 2);
  callback = tmp2[1];
  const items = [
    function execFn() {
      const self = this;
      const apply = _execFn.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    { loading: tmp[0], error: tmp2[0] }
  ];
  return items;
};