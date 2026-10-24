// === Module 16349: openBountiesNuxPromoSheet ===

// Module 16349 (openBountiesNuxPromoSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = size.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16350, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";