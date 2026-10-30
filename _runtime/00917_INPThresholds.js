// === Module 917: INPThresholds ===

// Module 917 (INPThresholds)
import _mod906 from "module_906" /* 906 */;
import observe from "observe" /* 908 */;
import bindReporter from "bindReporter" /* 909 */;
import _mod911 from "module_911" /* 911 */;
import _mod918 from "module_918" /* 918 */;
import InteractionManager from "InteractionManager" /* 919 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [200, 500];

export const INPThresholds = items;
export (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let visibilityWatcher;
  if (globalThis.PerformanceEventTiming) {
    if ("interactionId" in globalThis.PerformanceEventTiming.prototype) {
      visibilityWatcher = require("module_902").getVisibilityWatcher();
      let obj2 = require("module_902");
      require("whenActivated").whenActivated(() => {
        obj = _mod918;
        const interactionCountPolyfill = obj.initInteractionCountPolyfill();
        const metric = _mod906.initMetric("INP");
        closure_2 = _mod911.initUnique(obj, InteractionManager.InteractionManager);
        function handleEntries(arg0) {
          closure_0 = arg0;
          closure_0(metric[6]).whenIdleOrHidden(() => {
            for (const item10005 of closure_0) {
              let _processEntryResult = closure_2._processEntry(item10005);
              continue;
            }
            const result = closure_2._estimateP98LongestInteraction();
            let tmp4 = result;
            if (result) {
              tmp4 = result._latency !== metric.value;
            }
            if (tmp4) {
              ({ _latency: metric.value, entries: metric.entries } = result);
              closure_0();
            }
          });
        }
        const tmp5 = obj;
        let num = obj.durationThreshold;
        if (num == null) {
          num = 40;
        }
        const observeResult = observe.observe("event", handleEntries, { durationThreshold: num });
        closure_0 = bindReporter.bindReporter(closure_0, metric, items, tmp5.reportAllChanges);
        if (observeResult) {
          observeResult.observe({ type: "first-input", buffered: true });
          closure_2.onHidden(() => {
            if (typeof handleEntries === "function") {
              closure_0 = observeResult.takeRecords();
              closure_0(metric[6]).whenIdleOrHidden(() => {
                for (const item10005 of closure_0) {
                  let _processEntryResult = closure_2._processEntry(item10005);
                  continue;
                }
                const result = closure_2._estimateP98LongestInteraction();
                let tmp4 = result;
                if (result) {
                  tmp4 = result._latency !== metric.value;
                }
                if (tmp4) {
                  ({ _latency: metric.value, entries: metric.entries } = result);
                  closure_0();
                }
              });
              closure_0(true);
              obj = closure_0(metric[6]);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        }
        const tmpResult = bindReporter;
      });
      let obj3 = require("whenActivated");
    }
  }
}