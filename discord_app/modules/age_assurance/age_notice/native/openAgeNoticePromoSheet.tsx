// === Module 16925: openAgeNoticePromoSheet ===

// Module 16925 (openAgeNoticePromoSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const AGE_NOTICE_PROMO_SHEET_KEY = "AGE_NOTICE_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/openAgeNoticePromoSheet.tsx");

export default function openAgeNoticePromoSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16926, dependencyMap.paths), AGE_NOTICE_PROMO_SHEET_KEY, arg0);
};
export const AGE_NOTICE_PROMO_SHEET_KEY = "AGE_NOTICE_PROMO_SHEET_KEY";