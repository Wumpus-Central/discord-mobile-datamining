// === Module 14792: prefetchFamilyCenterAgeGroupWhen ===

// Module 14792 (prefetchFamilyCenterAgeGroupWhen)
import maybeFetchCollectiblesForInvoicesDefault from "maybeFetchCollectiblesForInvoices" /* 5298 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;

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