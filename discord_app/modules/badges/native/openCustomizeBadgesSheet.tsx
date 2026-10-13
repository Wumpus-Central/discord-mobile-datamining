// === Module 15197: openCustomizeBadgesSheet ===

// Module 15197 (openCustomizeBadgesSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15198, dependencyMap.paths), "Customize Badges", { analyticsLocations: analyticsLocations.analyticsLocations });
};