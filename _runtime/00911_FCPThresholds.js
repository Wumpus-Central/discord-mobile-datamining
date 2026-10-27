// === Module 911: FCPThresholds ===

// Module 911 (FCPThresholds)
import _mod914 from "module_914" /* 914 */;
import _mod918 from "module_918" /* 918 */;
import observe from "observe" /* 920 */;
import bindReporter from "bindReporter" /* 921 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [1800, 3000];

export const FCPThresholds = items;
export const onFCP = (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  require("whenActivated").whenActivated(() => {
    obj = _mod914;
    const firstHiddenTime = obj.getVisibilityWatcher();
    const metric = _mod918.initMetric("FCP");
    const observeResult = observe.observe("paint", (arg0) => {
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if ("first-contentful-paint" === nextResult.name) {
          let disconnectResult = observeResult.disconnect();
          if (tmp2.startTime < firstHiddenTime.firstHiddenTime) {
            let _Math = Math;
            obj = closure_0(obj[3]);
            metric.value = Math.max(tmp2.startTime - obj.getActivationStart(), 0);
            let entries = metric.entries;
            let arr = entries.push(tmp2);
            let tmp9 = closure_0(true);
          }
        }
        continue;
      }
    });
    closure_3 = observeResult;
    if (observeResult) {
      const tmpResult = bindReporter;
      closure_0 = tmpResult.bindReporter(closure_0, metric, items, obj.reportAllChanges);
    }
  });
};