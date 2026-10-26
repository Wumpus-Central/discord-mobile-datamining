// === Module 16005: TinyBroncoLazy ===

// Module 16005 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 16006 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 16007 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;