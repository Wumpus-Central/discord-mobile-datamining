// === Module 14253: useShowTinyBroncoPromoSheet ===

// Module 14253 (useShowTinyBroncoPromoSheet)
import dismissible_content from "dismissible_content" /* 2028 */;
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14252 */;
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet" /* 14254 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx");

export const useIsTinyBroncoEligible = function useIsTinyBroncoEligible() {
  return TinyBroncoNoticeVisibility.useShouldShowAgeNoticePromo();
};
export const useShowTinyBroncoPromoSheet = function useShowTinyBroncoPromoSheet(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  noop.useRef(false);
  const items = [markAsDismissed, visibleContent];
  const effect = noop.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
    }
    if (!current) {
      ref.current = true;
      const obj = { markAsDismissed };
      openTinyBroncoPromoSheetDefault(obj);
    }
  }, items);
};