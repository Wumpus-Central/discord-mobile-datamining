// === Module 14279: openTinyBroncoPromoSheet ===

// Module 14279 (openTinyBroncoPromoSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/tiny_bronco/native/openTinyBroncoPromoSheet.tsx");

export default function openTinyBroncoPromoSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14280, dependencyMap.paths), TINY_BRONCO_PROMO_SHEET_KEY, arg0);
};
export const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";