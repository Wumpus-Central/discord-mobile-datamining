// === Module 6334: swizzle ===

// Module 6334 (swizzle)
import isArrayish from "isArrayish" /* 6335 */;

function swizzle(arg0) {
  let items = [];
  let num = 0;
  let tmp = items;
  if (0 < length) {
    while (!isArrayish(arg0[num])) {
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
    if (typeof swizzle !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const items = [];
    let num = 0;
    let arr2 = items;
    let tmp2 = items;
    if (0 < length) {
      const tmp3 = arguments[num];
      while (!callback(dependencyMap[0])(tmp3)) {
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
    return callback(tmp2);
  };
};

export default swizzle;