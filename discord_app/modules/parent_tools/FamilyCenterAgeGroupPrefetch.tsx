// === Module 15548: FamilyCenterAgeGroupPrefetch ===

// Module 15548 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7612 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7610 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == FamilyCenterStore.getAgeGroup();
  }
  if (tmp) {
    if (!FamilyCenterStore.isLoading()) {
      if (FamilyCenterStore.canRefetch()) {
        FamilyCenterActionCreatorsDefault.initialPageLoad();
      }
    }
  }
};