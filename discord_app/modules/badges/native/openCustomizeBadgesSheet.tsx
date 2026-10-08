// === Module 14691: openCustomizeBadgesSheet ===

// Module 14691 (openCustomizeBadgesSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14692, dependencyMap.paths), "Customize Badges", { analyticsLocations: analyticsLocations.analyticsLocations });
};