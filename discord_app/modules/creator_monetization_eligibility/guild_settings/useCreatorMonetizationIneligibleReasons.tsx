// === Module 16936: useCreatorMonetizationIneligibleReasons ===

// Module 16936 (useCreatorMonetizationIneligibleReasons)
import obj132 from "obj132" /* 2 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 16908 */;

const result = obj132.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  const obj = useCreatorMonetizationEligibilityItemsDefault(eligibility);
  let flatMapResult;
  if (obj != null) {
    flatMapResult = obj.flatMap((item, index) => {
      if (item.checked) {
        let items = [];
      } else {
        items = [item.key];
      }
      return items;
    });
  }
  if (flatMapResult == null) {
    flatMapResult = null;
  }
  return flatMapResult;
};