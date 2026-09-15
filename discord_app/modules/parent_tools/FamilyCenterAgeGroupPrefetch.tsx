// discord_app/modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators.tsx";
import FamilyCenterStore from "FamilyCenterStore.tsx";

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
