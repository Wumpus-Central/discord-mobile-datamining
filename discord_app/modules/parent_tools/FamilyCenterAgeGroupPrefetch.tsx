// === Module 16838: FamilyCenterAgeGroupPrefetch ===

// Module 16838 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7647 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7645 */;

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