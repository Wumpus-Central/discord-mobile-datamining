// === Module 910: CLSThresholds ===

// Module 910 (CLSThresholds)
import _mod913 from "module_913" /* 913 */;
import _mod914 from "module_914" /* 914 */;
import _mod918 from "module_918" /* 918 */;
import observe from "observe" /* 920 */;
import bindReporter from "bindReporter" /* 921 */;
import _mod923 from "module_923" /* 923 */;
import LayoutShiftManager from "LayoutShiftManager" /* 924 */;

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
    obj = _mod918;
    const metric = obj.initMetric("CLS", 0);
    const visibilityWatcher = _mod914.getVisibilityWatcher();
    closure_2 = _mod923.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
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
      const WINDOW = _mod913.WINDOW;
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