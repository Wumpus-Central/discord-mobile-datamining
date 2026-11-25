// === Module 16533: openBountiesNuxPromoSheet ===

// Module 16533 (openBountiesNuxPromoSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = size.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16534, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";