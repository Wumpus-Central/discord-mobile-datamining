// === Module 927: LCPThresholds ===

// Module 927 (LCPThresholds)
import _mod917 from "module_917" /* 917 */;
import _mod918 from "module_918" /* 918 */;
import whenIdleOrHidden from "whenIdleOrHidden" /* 929 */;

const require = globalThis.__r;
let _require, closure_0;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [2500, 4000];

export const LCPThresholds = items;
export const onLCP = (arg0, arg1) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = require("whenActivated");
  obj2.whenActivated(() => {
    let tmp3 = obj;
    obj = closure_0(obj[1]);
    const firstHiddenTime = obj.getVisibilityWatcher();
    let obj2 = closure_0(obj[2]);
    const metric = obj2.initMetric("LCP");
    const obj3 = closure_0(obj[3]);
    let closure_3 = obj3.initUnique(firstHiddenTime, closure_0(obj[4]).LCPEntryManager);
    function handleEntries(arr) {
      let substr = arr;
      if (!obj.reportAllChanges) {
        substr = arr.slice(-1);
      }
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let _processEntryResult = closure_3._processEntry(nextResult);
        if (nextResult.startTime < firstHiddenTime.firstHiddenTime) {
          let _Math = Math;
          let startTime = tmp3.startTime;
          obj = _mod918;
          metric.value = max(startTime - obj.getActivationStart(), 0);
          items = [tmp3];
          metric.entries = items;
          let tmp12 = closure_0();
        }
        continue;
      }
    }
    const obj4 = closure_0(obj[6]);
    const observeResult = obj4.observe("largest-contentful-paint", handleEntries);
    const tmp = closure_0;
    const tmp6 = firstHiddenTime;
    if (observeResult) {
      let tmp8 = tmp;
      const tmp2Result = closure_0(obj[7]);
      let tmp12 = tmp2Result;
      closure_0 = tmp2Result.bindReporter(closure_0, metric, closure_1_2, tmp6.reportAllChanges);
      const tmp2Result2 = closure_0(obj[8]);
      let closure_6 = tmp2Result2.runOnce(() => {
        handleEntries(observeResult.takeRecords());
        observeResult.disconnect();
        closure_0(true);
      });
      function stopListeningWrapper(isTrusted) {
        if (isTrusted.isTrusted) {
          obj = whenIdleOrHidden;
          obj.whenIdleOrHidden(closure_6);
          const obj2 = _mod917;
          obj2.removePageListener(isTrusted.type, stopListeningWrapper, { capture: true });
        }
      }
      items = ["keydown", "click", "visibilitychange"];
      for (const item10048 of items) {
        let obj7 = closure_0(obj[10]);
        let addPageListenerResult = obj7.addPageListener(item10048, stopListeningWrapper, { capture: true });
        continue;
      }
    }
  });
};