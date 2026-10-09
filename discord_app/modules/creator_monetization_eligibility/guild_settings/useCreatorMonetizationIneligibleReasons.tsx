// === Module 18407: useCreatorMonetizationIneligibleReasons ===

// Module 18407 (useCreatorMonetizationIneligibleReasons)
import c from "c" /* 576 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 18379 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreatorMonetizationIneligibleReasons(arg0) {
  const cResult = c.c(2);
  const obj2 = useCreatorMonetizationEligibilityItemsDefault(arg0);
  if (cResult[0] !== obj2) {
    let flatMapResult;
    if (obj2 != null) {
      flatMapResult = obj2.flatMap((checked) => {
        if (checked.checked) {
          let items = [];
        } else {
          items = [checked.key];
        }
        return items;
      });
    }
    cResult[0] = obj2;
    cResult[1] = flatMapResult;
    let tmp2 = flatMapResult;
  } else {
    tmp2 = cResult[1];
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  return tmp2;
}) : (function useCreatorMonetizationIneligibleReasons(arg0) {
  const obj = useCreatorMonetizationEligibilityItemsDefault(arg0);
  let flatMapResult;
  if (obj != null) {
    flatMapResult = obj.flatMap((checked) => {
      if (checked.checked) {
        let items = [];
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