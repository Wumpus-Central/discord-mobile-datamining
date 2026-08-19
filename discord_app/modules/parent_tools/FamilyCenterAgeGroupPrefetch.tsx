// discord_app/modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx
import maybeFetchCollectiblesForInvoicesDefault from "FamilyCenterActionCreators.tsx";
import freshTeenActivityWithMap from "FamilyCenterStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == closure_2.getAgeGroup();
  }
  if (tmp) {
    if (!closure_2.isLoading()) {
      if (closure_2.canRefetch()) {
        maybeFetchCollectiblesForInvoicesDefault.initialPageLoad();
      }
    }
  }
};