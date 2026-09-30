// === Module 15244: FamilyCenterAgeGroupPrefetch ===

// Module 15244 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7155 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7153 */;

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