// === Module 912: bindReporter ===

// Module 912 (bindReporter)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (tmpResult, metric, items, reportAllChanges) => {
  closure_3 = reportAllChanges;
  return (arg0) => {
    let tmp = metric.value >= 0;
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
      diff = metric.value - num;
      if (!diff) {
        diff = undefined === value;
      }
      tmp = diff;
    }
    if (tmp) {
      metric.delta = diff;
      value = metric.value;
      let str = "poor";
      if (value <= items[1]) {
        let str2 = "good";
        if (value > items[0]) {
          str2 = "needs-improvement";
        }
        str = str2;
      }
      metric.rating = str;
      tmpResult(metric);
    }
  };
}