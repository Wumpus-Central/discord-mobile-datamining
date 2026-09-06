// === Module 9701: LazyAPIPromise ===

// Module 9701 (LazyAPIPromise)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("utils/LazyAPIPromise.tsx");

export default function useLazyAPIPromise(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  noop = async function _execFn(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            asyncGeneratorStep(true);
            _slicedToArray(null);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: _require(), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_2 = closure_2;
          const aPIError = new closure_0(tmp3[3]).APIError(closure_128_2);
          closure_128_1 = aPIError;
          if (closure_129_1 != null) {
            tmp25(closure_128_1);
          }
          closure_129_3(closure_128_1);
          closure_129_2(false);
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value;
          closure_129_2(false);
          closure_129_3(null);
          c3 = 0;
          c5 = 3;
          obj = { value: closure_128_0, done: true };
          return obj;
        }
      } catch (tmp41) {
        closure_2 = tmp41;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp41;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp2[1];
  const items = [
    function execFn() {
      const self = this;
      const apply = closure_4.apply;
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