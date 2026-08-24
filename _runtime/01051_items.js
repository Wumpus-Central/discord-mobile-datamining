// === Module 1051: items ===

// Module 1051 (items)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [2500, 4000];
arg5.LCPThresholds = items;
arg5.onLCP = (arg0) => {
  const _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require(obj[0]).whenActivated(() => {
    obj = callback(obj[1]);
    const visibilityWatcher = obj.getVisibilityWatcher();
    const metric = callback(obj[2]).initMetric("LCP");
    let obj2 = callback(obj[2]);
    const tmp = callback;
    let tmp3 = obj;
    closure_3 = callback(obj[3]).initUnique(visibilityWatcher, callback(obj[4]).LCPEntryManager);
    function handleEntries(arr) {
      let substr = arr;
      if (!closure_1.reportAllChanges) {
        substr = arr.slice(-1);
      }
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let tmp4 = closure_3;
        let _processEntryResult = closure_3._processEntry(nextResult);
        let tmp6 = closure_1;
        if (nextResult.startTime < closure_1.firstHiddenTime) {
          let tmp7 = metric;
          let _Math = Math;
          let tmp8 = nextResult;
          let tmp9 = callback;
          let tmp10 = obj;
          obj = callback(obj[5]);
          metric.value = Math.max(tmp3.startTime - obj.getActivationStart(), 0);
          items = [tmp3];
          metric.entries = items;
          let tmp11 = callback;
          let tmp12 = callback();
        }
        continue;
      }
    }
    const obj3 = callback(obj[3]);
    let tmp6 = visibilityWatcher;
    const observeResult = callback(obj[6]).observe("largest-contentful-paint", handleEntries);
    closure_5 = observeResult;
    if (observeResult) {
      let tmp2Result = tmp2(tmp4[7]);
      callback = tmp2Result.bindReporter(callback, metric, closure_1_2, tmp6.reportAllChanges);
      tmp2Result = tmp2(tmp4[8]);
      closure_6 = tmp2Result.runOnce(() => {
        handleEntries(observeResult.takeRecords());
        observeResult.disconnect();
        callback(true);
      });
      function stopListeningWrapper(isTrusted) {
        if (isTrusted.isTrusted) {
          obj = callback(obj[9]);
          obj.whenIdleOrHidden(closure_6);
          callback(obj[10]).removePageListener(isTrusted.type, stopListeningWrapper, { capture: true });
          const obj2 = callback(obj[10]);
        }
      }
      items = ["keydown", "click", "visibilitychange"];
      for (const item10048 of items) {
        let tmp15 = callback;
        let tmp16 = callback;
        let tmp17 = obj;
        let tmp18 = obj;
        let obj7 = callback(obj[10]);
        let addPageListenerResult = obj7.addPageListener(item10048, stopListeningWrapper, { capture: true });
        continue;
      }
    }
  });
};