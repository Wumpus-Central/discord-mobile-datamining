// === Module 16792: openCustomizeBadgesSheet ===

// Module 16792 (openCustomizeBadgesSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16793, dependencyMap.paths), "Customize Badges", { analyticsLocations: analyticsLocations.analyticsLocations });
}