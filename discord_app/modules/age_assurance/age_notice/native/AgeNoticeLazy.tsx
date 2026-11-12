// === Module 17118: AgeNoticeLazy ===

// Module 17118 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17119 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export const useShowAgeNoticePromoSheet = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;