// === Module 12157: conjureTipSelection ===

// Module 12157 (conjureTipSelection)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/tips/conjureTipSelection.tsx");

export const selectConjureTips = function selectConjureTips(arg0, arg1, cResult) {
  const obj = { callout: null, hint: null };
  const items = [...arg0];
  const sorted = items.sort((priority, priority2) => priority2.priority - priority.priority);
  const iter = sorted[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj2 = nextResult;
    if (null != obj.callout) {
      if (null != obj.hint) {
        iter.return();
        break;
      }
      return obj;
    }
    if (!cResult(obj2)) {
      let resolveResult = obj2.resolve(arg1);
      let tmp6 = resolveResult;
      if (null != resolveResult) {
        if ("hint" === tmp6) {
          if (obj.hint == null) {
            let obj3 = { tip: null, presentation: null };
            obj3.tip = obj2;
            obj3.presentation = tmp6;
            obj.hint = obj3;
          }
        } else if (obj.callout == null) {
          let obj4 = { tip: null, presentation: null };
          obj4.tip = obj2;
          obj4.presentation = tmp6;
          obj.callout = obj4;
        }
      }
    }
    continue;
  }
};