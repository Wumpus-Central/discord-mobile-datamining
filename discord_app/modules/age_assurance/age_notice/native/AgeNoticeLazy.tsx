// === Module 15926: AgeNoticeLazy ===

// Module 15926 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 15927 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 15928 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export const useShowAgeNoticePromoSheet = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;