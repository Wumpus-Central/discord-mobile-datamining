function swizzle(arg0) {
  let items = [];
  let num = 0;
  let tmp = items;
  if (0 < arg0.length) {
    while (!require(5714) /* isArrayish */(arg0[num])) {
      let arr = items.push(tmp2);
      let tmp8 = items;
      num = num + 1;
      items = tmp6;
      tmp = tmp6;
    }
    const call = concat.call;
    const call2 = slice.call;
    const tmp11 = typeof call2 === "unknown" ? slice() : call2(arg0[num]);
    typeof call === "unknown" ? concat(tmp11) : call(items, tmp11);
    const tmp10 = slice;
    const tmp9 = concat;
  }
  return tmp;
}
swizzle.wrap = (arg0) => {
  let closure_0 = arg0;
  return () => {
    if (typeof outer1_4 !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const items = [];
    const length = arguments.length;
    let num = 0;
    let arr2 = items;
    let tmp2 = items;
    if (0 < length) {
      const tmp3 = arguments[num];
      while (!callback(outer1_1[0])(tmp3)) {
        let arr = arr2.push(tmp3);
        let tmp9 = arr2;
        num = num + 1;
        arr2 = tmp7;
        tmp2 = tmp7;
      }
      const call = outer1_2.call;
      const call2 = outer1_3.call;
      const tmp12 = typeof call2 === "unknown" ? outer1_3() : call2(tmp3);
      typeof call === "unknown" ? outer1_2(tmp12) : call(arr2, tmp12);
      const tmp10 = outer1_2;
      const tmp11 = outer1_3;
    }
    return callback(tmp2);
  };
};

export default swizzle;