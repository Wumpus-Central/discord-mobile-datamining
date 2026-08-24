// discord_app/modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx
import set from "../../../../_runtime/00002_set.js";
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems.tsx";

const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  const obj = useCreatorMonetizationEligibilityItemsDefault(eligibility);
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
};