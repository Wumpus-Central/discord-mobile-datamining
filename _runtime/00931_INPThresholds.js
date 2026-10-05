// _runtime/00931_INPThresholds.js
import _mod920 from "metro/00920__.js";
import observe2 from "00922_observe.js";
import bindReporter from "00923_bindReporter.js";
import _mod925 from "metro/00925__.js";
import _mod932 from "metro/00932__.js";
import InteractionManager from "00933_InteractionManager.js";

const require = globalThis.__r;
let _require, closure_0, closure_2;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
      let obj2 = require("metro/00916__.js");
      visibilityWatcher = obj2.getVisibilityWatcher();
      let obj3 = require("whenActivated");
      obj3.whenActivated(() => {
        obj = _mod932;
        const interactionCountPolyfill = obj.initInteractionCountPolyfill();
        const obj2 = _mod920;
        const metric = obj2.initMetric("INP");
        const obj3 = _mod925;
        closure_2 = obj3.initUnique(obj, InteractionManager.InteractionManager);
        function handleEntries(arg0) {
          closure_0 = arg0;
          obj = closure_0(metric[6]);
          obj.whenIdleOrHidden(() => {
            for (const item10005 of closure_0) {
              let _processEntryResult = closure_2._processEntry(item10005);
              continue;
            }
            const result = closure_2._estimateP98LongestInteraction();
            const tmp4 = result && result._latency !== metric.value;
            if (tmp4) {
              ({ _latency: metric.value, entries: metric.entries } = result);
              closure_0();
            }
          });
        }
        let num = obj.durationThreshold;
        const observe = observe2.observe;
        observe2;
        const tmp5 = obj;
        if (num == null) {
          num = 40;
        }
        const observeResult = observe("event", handleEntries, { durationThreshold: num });
        const tmpResult = bindReporter;
        closure_0 = tmpResult.bindReporter(closure_0, metric, items, tmp5.reportAllChanges);
        if (observeResult) {
          observeResult.observe({ type: "first-input", buffered: true });
          closure_2.onHidden(() => {
            if (typeof handleEntries === "function") {
              closure_0 = observeResult.takeRecords();
              obj = closure_0(metric[6]);
              obj.whenIdleOrHidden(() => {
                for (const item10005 of closure_0) {
                  let _processEntryResult = closure_2._processEntry(item10005);
                  continue;
                }
                const result = closure_2._estimateP98LongestInteraction();
                const tmp4 = result && result._latency !== metric.value;
                if (tmp4) {
                  ({ _latency: metric.value, entries: metric.entries } = result);
                  closure_0();
                }
              });
              let tmp4 = closure_0;
              closure_0(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        }
      });
    }
  }
};
