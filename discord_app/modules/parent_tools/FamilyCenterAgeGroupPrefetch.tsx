// discord_app/modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx
import maybeFetchCollectiblesForInvoicesDefault from "FamilyCenterActionCreators.tsx";
import closure_2 from "FamilyCenterStore.tsx";

const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == closure_2.getAgeGroup();
  }
  if (tmp) {
    if (!closure_2.isLoading()) {
      if (obj.canRefetch()) {
        maybeFetchCollectiblesForInvoicesDefault.initialPageLoad();
        const obj2 = maybeFetchCollectiblesForInvoicesDefault;
      }
    }
    obj = closure_2;
  }
};
