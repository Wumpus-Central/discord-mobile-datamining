// === Module 17278: AgeNoticeLazy ===

// Module 17278 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17279 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17280 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export const useShowAgeNoticePromoSheet = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;