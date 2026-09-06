// === Module 901: CLSThresholds ===

// Module 901 (CLSThresholds)
import _mod904 from "module_904" /* 904 */;
import _mod905 from "module_905" /* 905 */;
import _mod909 from "module_909" /* 909 */;
import observe from "observe" /* 911 */;
import bindReporter from "bindReporter" /* 912 */;
import _mod914 from "module_914" /* 914 */;
import LayoutShiftManager from "LayoutShiftManager" /* 915 */;

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
  obj2.onFCP(require("runOnce").runOnce(() => {
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
      const WINDOW = _mod904.WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
    observeResult = observe.observe("layout-shift", handleEntries);
  }));
};