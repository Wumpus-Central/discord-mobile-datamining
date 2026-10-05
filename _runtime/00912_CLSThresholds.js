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
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];

export const CLSThresholds = items;
export const onCLS = (arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let tmp = require("FCPThresholds");
  const onFCP = tmp.onFCP;
  let obj2 = require("runOnce");
  onFCP(obj2.runOnce(() => {
    obj = _mod920;
    const metric = obj.initMetric("CLS", 0);
    const obj2 = _mod916;
    const visibilityWatcher = obj2.getVisibilityWatcher();
    const obj4 = _mod925;
    let closure_2 = obj4.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
    function handleEntries(arg0) {
      const tmp = arg0[Symbol.iterator]();
      while (tmp !== undefined) {
        let _processEntryResult = closure_2._processEntry(tmp2);
        continue;
      }
      if (closure_2._sessionValue > metric.value) {
        ({ _sessionValue: tmp7.value, _sessionEntries: tmp7.entries } = closure_2);
        bindReporterResult();
      }
    }
    const obj5 = observe;
    const observeResult = obj5.observe("layout-shift", handleEntries);
    const tmp4 = obj;
    if (observeResult) {
      const tmpResult = bindReporter;
      const bindReporterResult = tmpResult.bindReporter(closure_0, metric, items, tmp4.reportAllChanges);
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
  }));
};