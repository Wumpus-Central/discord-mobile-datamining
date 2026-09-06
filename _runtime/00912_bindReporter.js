// _runtime/00912_bindReporter.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (arg0, arg1, arg2, arg3) => {
  closure_0 = arg0;
  value = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  return (arg0) => {
    let tmp = value.value >= 0;
    if (tmp) {
      let tmp2 = arg0;
      if (!arg0) {
        tmp2 = closure_3;
      }
      tmp = tmp2;
    }
    if (tmp) {
      let num = value;
      if (value == null) {
        num = 0;
      }
      diff = iter.value - num;
      if (!diff) {
        diff = undefined === value;
      }
      tmp = diff;
    }
    if (tmp) {
      iter.delta = diff;
      value = iter.value;
      let str = "poor";
      if (value <= dependencyMap[1]) {
        let str2 = "good";
        if (value > dependencyMap[0]) {
          str2 = "needs-improvement";
        }
        str = str2;
      }
      iter.rating = str;
      closure_0(iter);
    }
  };
}