// _runtime/01036_items.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];
arg5.CLSThresholds = items;
arg5.onCLS = (arg0) => {
  const _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = _require(obj[0]);
  obj2.onFCP(_require(obj[1]).runOnce(() => {
    obj = callback(obj[2]);
    const metric = obj.initMetric("CLS", 0);
    const visibilityWatcher = callback(obj[3]).getVisibilityWatcher();
    const obj2 = callback(obj[3]);
    closure_2 = callback(obj[4]).initUnique(metric, callback(obj[5]).LayoutShiftManager);
    function handleEntries(arg0) {
      while (tmp !== undefined) {
        let tmp3 = closure_2;
        let tmp4 = closure_2;
        let _processEntryResult = closure_2._processEntry(tmp2);
        continue;
      }
      if (closure_2._sessionValue > metric.value) {
        ({ _sessionValue: tmp7.value, _sessionEntries: tmp7.entries } = closure_2);
        bindReporterResult();
      }
    }
    const obj4 = callback(obj[4]);
    let tmp4 = metric;
    const observeResult = callback(obj[6]).observe("layout-shift", handleEntries);
    closure_4 = observeResult;
    if (observeResult) {
      const tmpResult = tmp(tmp2[7]);
      const bindReporterResult = tmpResult.bindReporter(callback, metric, closure_1_2, tmp4.reportAllChanges);
      callback = bindReporterResult;
      visibilityWatcher.onHidden(() => {
        handleEntries(observeResult.takeRecords());
        bindReporterResult(true);
      });
      const WINDOW = tmp(tmp2[8]).WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
  }));
};