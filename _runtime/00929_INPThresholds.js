// === Module 929: INPThresholds ===

// Module 929 (INPThresholds)
import _mod918 from "module_918" /* 918 */;
import observe from "observe" /* 920 */;
import bindReporter from "bindReporter" /* 921 */;
import _mod923 from "module_923" /* 923 */;
import _mod930 from "module_930" /* 930 */;
import InteractionManager from "InteractionManager" /* 931 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [200, 500];

export const INPThresholds = items;
export const onINP = (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let visibilityWatcher;
  if (globalThis.PerformanceEventTiming) {
    if ("interactionId" in globalThis.PerformanceEventTiming.prototype) {
      visibilityWatcher = require("module_914").getVisibilityWatcher();
      let obj2 = require("module_914");
      require("whenActivated").whenActivated(() => {
        obj = _mod930;
        const interactionCountPolyfill = obj.initInteractionCountPolyfill();
        const metric = _mod918.initMetric("INP");
        closure_2 = _mod923.initUnique(obj, InteractionManager.InteractionManager);
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
};