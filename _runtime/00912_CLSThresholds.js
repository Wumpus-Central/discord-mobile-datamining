// === Module 912: CLSThresholds ===

// Module 912 (CLSThresholds)
import _mod915 from "module_915" /* 915 */;
import _mod916 from "module_916" /* 916 */;
import _mod920 from "module_920" /* 920 */;
import observe from "observe" /* 922 */;
import bindReporter from "bindReporter" /* 923 */;
import _mod925 from "module_925" /* 925 */;
import LayoutShiftManager from "LayoutShiftManager" /* 926 */;

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
  obj2.onFCP(require("runOnce").runOnce(() => {
    obj = _mod920;
    const metric = obj.initMetric("CLS", 0);
    const visibilityWatcher = _mod916.getVisibilityWatcher();
    closure_2 = _mod925.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
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
      const WINDOW = _mod915.WINDOW;
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