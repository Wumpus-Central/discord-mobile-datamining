// === Module 16043: openCustomizeBadgesSheet ===

// Module 16043 (openCustomizeBadgesSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16044, dependencyMap.paths), "Customize Badges", { analyticsLocations: analyticsLocations.analyticsLocations });
}