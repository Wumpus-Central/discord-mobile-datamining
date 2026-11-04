// === Module 16863: AgeNoticeLazy ===

// Module 16863 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16864 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowAgeNoticePromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowAgeNoticePromoSheet.useShowTinyBroncoPromoSheet;