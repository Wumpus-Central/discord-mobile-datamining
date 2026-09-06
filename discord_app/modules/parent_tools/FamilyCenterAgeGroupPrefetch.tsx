// === Module 15484: FamilyCenterAgeGroupPrefetch ===

// Module 15484 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == FamilyCenterStore.getAgeGroup();
  }
  if (tmp) {
    if (!FamilyCenterStore.isLoading()) {
      if (obj.canRefetch()) {
        FamilyCenterActionCreatorsDefault.initialPageLoad();
      }
    }
    obj = FamilyCenterStore;
  }
};