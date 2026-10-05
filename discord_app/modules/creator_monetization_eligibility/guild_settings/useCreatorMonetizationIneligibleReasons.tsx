// === Module 17912: useCreatorMonetizationIneligibleReasons ===

// Module 17912 (useCreatorMonetizationIneligibleReasons)
import react from "react" /* 576 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 17884 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useCreatorMonetizationEligibilityItemsDefault(arg0);
  if (cResult[0] !== obj2) {
    let flatMapResult;
    if (obj2 != null) {
      flatMapResult = obj2.flatMap((checked) => {
        let items;
        if (checked.checked) {
          items = [];
        } else {
          items = [checked.key];
        }
        return items;
      });
    }
    cResult[0] = obj2;
    cResult[1] = flatMapResult;
    tmp2 = flatMapResult;
  } else {
    tmp2 = cResult[1];
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  return tmp2;
}) : ((arg0) => {
  const obj = useCreatorMonetizationEligibilityItemsDefault(arg0);
  let flatMapResult;
  if (obj != null) {
    flatMapResult = obj.flatMap((checked) => {
      let items;
      if (checked.checked) {
        items = [];
      } else {
        items = [checked.key];
      }
      return items;
    });
  }
  if (flatMapResult == null) {
    flatMapResult = null;
  }
  return flatMapResult;
});
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = tmp2;