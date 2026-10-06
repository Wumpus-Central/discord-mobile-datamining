// _runtime/06041_swizzle.js
import isArrayish from "06042_isArrayish.js";

function swizzle(arg0) {
  let items = [];
  let num = 0;
  let tmp = items;
  if (0 < arg0.length) {
    do {
      let callResult;
      let tmp2 = arg0[num];
      if (isArrayish(tmp2)) {
        callResult = concat.call(items, slice.call(tmp2));
      } else {
        let arr = items.push(tmp2);
        callResult = items;
      }
      num = num + 1;
      items = callResult;
      tmp = callResult;
    } while (num < arg0.length);
  }
  return tmp;
}
swizzle.wrap = (arg0) => {
  let closure_0 = arg0;
  return function () {
    if (typeof swizzle === "function") {
      const items = [];
      const length = arguments.length;
      let num = 0;
      let arr2 = items;
      let tmp2 = items;
      if (0 < length) {
        do {
          let callResult;
          let tmp3 = arguments[num];
          if (isArrayish(tmp3)) {
            callResult = concat.call(arr2, slice.call(tmp3));
          } else {
            let arr = arr2.push(tmp3);
            callResult = arr2;
          }
          num = num + 1;
          arr2 = callResult;
          tmp2 = callResult;
        } while (num < length);
      }
      return tmp(tmp2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
};

export default swizzle;
