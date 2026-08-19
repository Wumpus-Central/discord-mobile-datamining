// === Module 1037: items ===

// Module 1037 (items)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [1800, 3000];
arg5.FCPThresholds = items;
arg5.onFCP = (arg0) => {
  const _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require(obj[0]).whenActivated(() => {
    obj = callback(obj[1]);
    obj = obj.getVisibilityWatcher();
    const metric = callback(obj[2]).initMetric("FCP");
    const obj2 = callback(obj[2]);
    const tmp = callback;
    let tmp2 = obj;
    const observeResult = callback(obj[4]).observe("paint", (arg0) => {
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if ("first-contentful-paint" === nextResult.name) {
          let disconnectResult = observeResult.disconnect();
          if (tmp2.startTime < firstHiddenTime.firstHiddenTime) {
            let _Math = Math;
            obj = callback(firstHiddenTime[3]);
            metric.value = Math.max(tmp2.startTime - obj.getActivationStart(), 0);
            let entries = metric.entries;
            let arr = entries.push(tmp2);
            let tmp9 = callback(true);
          }
        }
        continue;
      }
    });
    closure_3 = observeResult;
    if (observeResult) {
      const tmpResult = tmp(tmp2[5]);
      callback = tmpResult.bindReporter(callback, metric, items, obj.reportAllChanges);
    }
    const obj3 = callback(obj[4]);
  });
};