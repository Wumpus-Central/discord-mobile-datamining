// _runtime/00920_items.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [200, 500];
arg5.INPThresholds = items;
arg5.onINP = (arg0) => {
  const _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let visibilityWatcher;
  if (globalThis.PerformanceEventTiming) {
    if ("interactionId" in globalThis.PerformanceEventTiming.prototype) {
      visibilityWatcher = _require(obj[0]).getVisibilityWatcher();
      let obj2 = _require(obj[0]);
      _require(obj[1]).whenActivated(() => {
        obj = callback(obj[2]);
        const interactionCountPolyfill = obj.initInteractionCountPolyfill();
        const metric = callback(obj[3]).initMetric("INP");
        const obj2 = callback(obj[3]);
        let tmp = callback;
        const tmp2 = obj;
        closure_2 = callback(obj[4]).initUnique(metric, callback(obj[5]).InteractionManager);
        function handleEntries(arg0) {
          const callback = arg0;
          callback(metric[6]).whenIdleOrHidden(() => {
            for (const item10005 of closure_0) {
              let tmp = closure_1_2;
              let _processEntryResult = closure_1_2._processEntry(item10005);
              continue;
            }
            const result = closure_1_2._estimateP98LongestInteraction();
            let tmp4 = result;
            if (result) {
              tmp4 = result._latency !== closure_1_1.value;
            }
            if (tmp4) {
              ({ _latency: closure_1_1.value, entries: closure_1_1.entries } = result);
              takeRecordsResult();
            }
          });
        }
        const obj3 = callback(obj[4]);
        const tmp5 = metric;
        let num = metric.durationThreshold;
        if (num == null) {
          num = 40;
        }
        const observeResult = callback(obj[7]).observe("event", handleEntries, { durationThreshold: num });
        closure_4 = observeResult;
        const obj4 = callback(obj[7]);
        callback = tmp(tmp2[8]).bindReporter(callback, metric, closure_2, tmp5.reportAllChanges);
        if (observeResult) {
          observeResult.observe({ type: "first-input", buffered: true });
          closure_2.onHidden(() => {
            if (typeof handleEntries !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const callback = observeResult.takeRecords();
            const takeRecordsResult = observeResult.takeRecords();
            callback(metric[6]).whenIdleOrHidden(() => {
              for (const item10005 of closure_0) {
                let tmp = closure_1_2;
                let _processEntryResult = closure_1_2._processEntry(item10005);
                continue;
              }
              const result = closure_1_2._estimateP98LongestInteraction();
              let tmp4 = result;
              if (result) {
                tmp4 = result._latency !== closure_1_1.value;
              }
              if (tmp4) {
                ({ _latency: closure_1_1.value, entries: closure_1_1.entries } = result);
                takeRecordsResult();
              }
            });
            callback(true);
          });
        }
      });
      let obj3 = _require(obj[1]);
    }
  }
};
