// _runtime/01037_items.js
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
          let tmp10 = observeResult;
          let disconnectResult = observeResult.disconnect();
          let tmp12 = nextResult;
          let tmp13 = firstHiddenTime;
          if (tmp2.startTime < firstHiddenTime.firstHiddenTime) {
            let tmp3 = metric;
            let _Math = Math;
            let tmp4 = nextResult;
            let tmp5 = callback;
            let tmp6 = firstHiddenTime;
            obj = callback(firstHiddenTime[3]);
            metric.value = Math.max(tmp2.startTime - obj.getActivationStart(), 0);
            let entries = metric.entries;
            let arr = entries.push(tmp2);
            let tmp8 = callback;
            let tmp9 = callback(true);
          }
        }
        continue;
      }
    });
    closure_3 = observeResult;
    if (observeResult) {
      const tmpResult = tmp(tmp2[5]);
      callback = tmpResult.bindReporter(callback, metric, closure_1_2, obj.reportAllChanges);
    }
  });
};
