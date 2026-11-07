// === Module 16922: AgeNoticeLazy ===

// Module 16922 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16923 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16924 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export const useShowAgeNoticePromoSheet = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;