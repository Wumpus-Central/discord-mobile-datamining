// discord_app/modules/badges/native/openCustomizeBadgesSheet.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14464, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
