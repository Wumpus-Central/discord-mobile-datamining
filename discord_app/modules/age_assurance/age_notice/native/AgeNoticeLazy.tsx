// === Module 16851: AgeNoticeLazy ===

// Module 16851 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16852 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16853 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowAgeNoticePromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowAgeNoticePromoSheet.useShowTinyBroncoPromoSheet;