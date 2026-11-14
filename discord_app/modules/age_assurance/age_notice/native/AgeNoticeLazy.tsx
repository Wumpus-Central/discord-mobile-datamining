// === Module 17241: AgeNoticeLazy ===

// Module 17241 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17242 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17243 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export const useShowAgeNoticePromoSheet = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;