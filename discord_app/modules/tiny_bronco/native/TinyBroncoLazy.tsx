// === Module 16001: TinyBroncoLazy ===

// Module 16001 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 16002 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 16003 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;