// === Module 923: bindReporter ===

// Module 923 (bindReporter)
let diff, value2;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const bindReporter = (tmpResult, metric, items, reportAllChanges) => {
  let closure_0;
  let closure_3 = reportAllChanges;
  return (arg0) => {
    let tmp = metric.value >= 0;
    if (tmp) {
      tmp = arg0 || reportAllChanges;
    }
    if (tmp) {
      let num = value2;
      const value = metric.value;
      if (value2 == null) {
        num = 0;
      }
      diff = value - num || undefined === value2;
      tmp = diff;
    }
    if (tmp) {
      metric.delta = diff;
      value2 = metric.value;
      let str = "poor";
      if (value2 <= items[1]) {
        let str2 = "good";
        if (value2 > items[0]) {
          str2 = "needs-improvement";
        }
        str = str2;
      }
      metric.rating = str;
      tmpResult(metric);
    }
  };
};