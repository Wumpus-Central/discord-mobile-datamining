// === Module 5646: swizzle ===

// Module 5646 (swizzle)
import _mod5647 from "module_5647" /* 5647 */;

function swizzle(arg0) {
  let items = [];
  let num = 0;
  let tmp = items;
  if (0 < arg0.length) {
    while (!_mod5647(arg0[num])) {
      let arr = items.push(tmp2);
      num = num + 1;
      items = tmp6;
      tmp = tmp6;
    }
    const call = concat.call;
    const call2 = slice.call;
    const tmp11 = typeof call2 === "unknown" ? slice() : call2(arg0[num]);
    typeof call === "unknown" ? concat(tmp11) : call(items, tmp11);
  }
  return tmp;
}
swizzle.wrap = (arg0) => {
  closure_0 = arg0;
  return () => {
    if (typeof swizzle === "function") {
      const items = [];
      const length = arguments.length;
      let num = 0;
      let arr2 = items;
      let tmp2 = items;
      if (0 < length) {
        const tmp3 = arguments[num];
        while (!_mod5647(tmp3)) {
          let arr = arr2.push(tmp3);
          num = num + 1;
          arr2 = tmp7;
          tmp2 = tmp7;
        }
        const call = concat.call;
        const call2 = slice.call;
        const tmp12 = typeof call2 === "unknown" ? slice() : call2(tmp3);
        typeof call === "unknown" ? concat(tmp12) : call(arr2, tmp12);
      }
      return tmp(tmp2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
};

export default swizzle;