// === Module 11660: openBadgeDetailsSheet ===

// Module 11660 (openBadgeDetailsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11661, dependencyMap.paths), c3, arg0);
}