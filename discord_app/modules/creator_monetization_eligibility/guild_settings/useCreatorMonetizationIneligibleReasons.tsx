// discord_app/modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx
import c from "../../../../_runtime/00576_c.js";
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx",
);

export const useCreatorMonetizationIneligibleReasons = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
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
    };
