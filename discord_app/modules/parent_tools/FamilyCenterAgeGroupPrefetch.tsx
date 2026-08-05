import { maybeFetchCollectiblesForInvoices } from "FamilyCenterActionCreators.tsx";
// discord_app/modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == freshTeenActivityWithMap.getAgeGroup();
  }
  if (tmp) {
    if (!freshTeenActivityWithMap.isLoading()) {
      if (obj.canRefetch()) {
        maybeFetchCollectiblesForInvoices.initialPageLoad();
        const obj2 = maybeFetchCollectiblesForInvoices;
      }
    }
    obj = freshTeenActivityWithMap;
  }
};