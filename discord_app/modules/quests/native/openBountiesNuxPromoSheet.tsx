// === Module 15125: openBountiesNuxPromoSheet ===

// Module 15125 (openBountiesNuxPromoSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = size.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15126, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";