// === Module 15586: FamilyCenterAgeGroupPrefetch ===

// Module 15586 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7249 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroup = function prefetchFamilyCenterAgeGroup() {
  if (null == FamilyCenterStore.getAgeGroup()) {
    if (!FamilyCenterStore.isLoading()) {
      if (FamilyCenterStore.canRefetch()) {
        FamilyCenterActionCreatorsDefault.initialPageLoad();
      }
    }
  }
};