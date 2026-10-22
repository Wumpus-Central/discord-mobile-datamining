// === Module 11092: openBadgeDetailsSheet ===

// Module 11092 (openBadgeDetailsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11093, dependencyMap.paths), c3, arg0);
};