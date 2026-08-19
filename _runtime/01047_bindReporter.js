// === Module 1047: bindReporter ===

// Module 1047 (bindReporter)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.bindReporter = (arg0, arg1, arg2, arg3) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
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
      let num = value2;
      if (value2 == null) {
        num = 0;
      }
      let diff = iter.value - num;
      closure_5 = diff;
      if (!diff) {
        diff = undefined === value2;
      }
      tmp = diff;
    }
    if (tmp) {
      value2 = iter.value;
      iter.delta = closure_5;
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
      callback(iter);
    }
  };
};