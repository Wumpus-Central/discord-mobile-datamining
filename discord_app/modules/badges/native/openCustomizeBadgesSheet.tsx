// === Module 15566: openCustomizeBadgesSheet ===

// Module 15566 (openCustomizeBadgesSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15567, dependencyMap.paths), "Customize Badges", { analyticsLocations: analyticsLocations.analyticsLocations });
};