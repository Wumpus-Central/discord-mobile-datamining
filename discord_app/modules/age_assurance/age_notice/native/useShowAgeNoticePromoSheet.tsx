// === Module 16853: useShowAgeNoticePromoSheet ===

// Module 16853 (useShowAgeNoticePromoSheet)
import dismissible_content from "dismissible_content" /* 4974 */;
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16852 */;
import openAgeNoticePromoSheetDefault from "openAgeNoticePromoSheet" /* 16854 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/useShowAgeNoticePromoSheet.tsx");

export function useIsTinyBroncoEligible() {
  return AgeNoticeVisibility.useShouldShowAgeNoticePromo();
}
export function useShowTinyBroncoPromoSheet(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  noop.useRef(false);
  items = [markAsDismissed, visibleContent];
  const effect = noop.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
    }
    if (!current) {
      ref.current = true;
      const obj = { markAsDismissed };
      openAgeNoticePromoSheetDefault(obj);
    }
  }, items);
}