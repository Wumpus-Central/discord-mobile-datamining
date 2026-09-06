// === Module 916: LCPThresholds ===

// Module 916 (LCPThresholds)
import _mod906 from "module_906" /* 906 */;
import _mod907 from "module_907" /* 907 */;
import whenIdleOrHidden from "whenIdleOrHidden" /* 918 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [2500, 4000];

export const LCPThresholds = items;
export const onLCP = (arg0, arg1) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  require("whenActivated").whenActivated(() => {
    obj = closure_0(obj[1]);
    const firstHiddenTime = obj.getVisibilityWatcher();
    const metric = closure_0(obj[2]).initMetric("LCP");
    let obj2 = closure_0(obj[2]);
    closure_3 = closure_0(obj[3]).initUnique(firstHiddenTime, closure_0(obj[4]).LCPEntryManager);
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
          obj = _mod907;
          metric.value = Math.max(tmp3.startTime - obj.getActivationStart(), 0);
          items = [tmp3];
          metric.entries = items;
          let tmp12 = closure_0();
        }
        continue;
      }
    }
    const obj3 = closure_0(obj[3]);
    const tmp6 = firstHiddenTime;
    const observeResult = closure_0(obj[6]).observe("largest-contentful-paint", handleEntries);
    closure_5 = observeResult;
    if (observeResult) {
      let tmp2Result = tmp2(tmp4[7]);
      closure_0 = tmp2Result.bindReporter(closure_0, metric, closure_1_2, tmp6.reportAllChanges);
      tmp2Result = tmp2(tmp4[8]);
      closure_6 = tmp2Result.runOnce(() => {
        handleEntries(observeResult.takeRecords());
        observeResult.disconnect();
        closure_0(true);
      });
      function stopListeningWrapper(isTrusted) {
        if (isTrusted.isTrusted) {
          whenIdleOrHidden.whenIdleOrHidden(closure_6);
          _mod906.removePageListener(isTrusted.type, stopListeningWrapper, { capture: true });
        }
      }
      items = ["keydown", "click", "visibilitychange"];
      for (const item10048 of items) {
        let obj7 = closure_0(obj[10]);
        let addPageListenerResult = obj7.addPageListener(item10048, stopListeningWrapper, { capture: true });
        continue;
      }
    }
    const obj4 = closure_0(obj[6]);
  });
};