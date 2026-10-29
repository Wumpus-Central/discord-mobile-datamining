// === Module 11221: openBadgeDetailsSheet ===

// Module 11221 (openBadgeDetailsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11222, dependencyMap.paths), c3, arg0);
}