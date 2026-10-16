// _runtime/00913_CLSThresholds.js
import _mod916 from "metro/00916__.js";
import _mod917 from "metro/00917__.js";
import _mod921 from "metro/00921__.js";
import observe from "00923_observe.js";
import bindReporter from "00924_bindReporter.js";
import _mod926 from "metro/00926__.js";
import LayoutShiftManager from "00927_LayoutShiftManager.js";

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];

export const CLSThresholds = items;
export const onCLS = (arg0, arg1) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = require("FCPThresholds");
  obj2.onFCP(
    require("runOnce").runOnce(() => {
      obj = _mod921;
      const metric = obj.initMetric("CLS", 0);
      const visibilityWatcher = _mod917.getVisibilityWatcher();
      closure_2 = _mod926.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
      function handleEntries(arg0) {
        while (tmp !== undefined) {
          let _processEntryResult = closure_2._processEntry(tmp2);
          continue;
        }
        if (closure_2._sessionValue > metric.value) {
          ({ _sessionValue: tmp7.value, _sessionEntries: tmp7.entries } = closure_2);
          bindReporterResult();
        }
        tmp = arg0[Symbol.iterator]();
      }
      const tmp4 = obj;
      if (observeResult) {
        const tmpResult = bindReporter;
        const bindReporterResult = tmpResult.bindReporter(closure_0, metric, items, tmp4.reportAllChanges);
        closure_0 = bindReporterResult;
        visibilityWatcher.onHidden(() => {
          handleEntries(observeResult.takeRecords());
          bindReporterResult(true);
        });
        const WINDOW = _mod916.WINDOW;
        if (WINDOW != null) {
          const _setTimeout = WINDOW.setTimeout;
          if (_setTimeout != null) {
            _setTimeout(bindReporterResult);
          }
        }
      }
      observeResult = observe.observe("layout-shift", handleEntries);
    }),
  );
};
