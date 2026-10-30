// === Module 898: CLSThresholds ===

// Module 898 (CLSThresholds)
import _mod901 from "module_901" /* 901 */;
import _mod902 from "module_902" /* 902 */;
import _mod906 from "module_906" /* 906 */;
import observe from "observe" /* 908 */;
import bindReporter from "bindReporter" /* 909 */;
import _mod911 from "module_911" /* 911 */;
import LayoutShiftManager from "LayoutShiftManager" /* 912 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];

export const CLSThresholds = items;
export (arg0, arg1) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = require("FCPThresholds");
  obj2.onFCP(require("runOnce").runOnce(() => {
    obj = _mod906;
    const metric = obj.initMetric("CLS", 0);
    const visibilityWatcher = _mod902.getVisibilityWatcher();
    closure_2 = _mod911.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
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
      const WINDOW = _mod901.WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
    observeResult = observe.observe("layout-shift", handleEntries);
  }));
}