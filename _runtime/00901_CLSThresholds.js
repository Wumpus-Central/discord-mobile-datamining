// _runtime/00901_CLSThresholds.js
import _mod905 from "metro/00905__.js";
import _mod909 from "metro/00909__.js";
import observe from "00911_observe.js";
import _mod914 from "metro/00914__.js";
import LayoutShiftManager from "00915_LayoutShiftManager.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];

export const CLSThresholds = items;
export const onCLS = (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = require("FCPThresholds");
  obj2.onFCP(
    require("runOnce").runOnce(() => {
      obj = _mod909;
      const metric = obj.initMetric("CLS", 0);
      const visibilityWatcher = _mod905.getVisibilityWatcher();
      closure_2 = _mod914.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
      function handleEntries(arg0) {
        while (tmp !== undefined) {
          let _processEntryResult = closure_2._processEntry(tmp2);
          continue;
        }
        if (closure_2._sessionValue > metric.value) {
          ({ _sessionValue: tmp7.value, _sessionEntries: tmp7.entries } = closure_2);
          bindReporterResult();
        }
      }
      let tmp4 = obj;
      const observeResult = observe.observe("layout-shift", handleEntries);
      if (observeResult) {
        const tmpResult = tmp(912);
        const bindReporterResult = tmpResult.bindReporter(closure_0, metric, items, tmp4.reportAllChanges);
        closure_0 = bindReporterResult;
        visibilityWatcher.onHidden(() => {
          handleEntries(observeResult.takeRecords());
          bindReporterResult(true);
        });
        const WINDOW = tmp(904).WINDOW;
        if (WINDOW != null) {
          const _setTimeout = WINDOW.setTimeout;
          if (_setTimeout != null) {
            _setTimeout(bindReporterResult);
          }
        }
      }
    }),
  );
};
