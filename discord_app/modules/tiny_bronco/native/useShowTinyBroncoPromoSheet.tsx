// === Module 14805: useShowTinyBroncoPromoSheet ===

// Module 14805 (useShowTinyBroncoPromoSheet)
import dismissible_content from "dismissible_content" /* 2048 */;
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14804 */;
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet" /* 14806 */;
import noop from "module_19" /* 19 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useIsTinyBroncoEligible() {
  return TinyBroncoNoticeVisibility.useShouldShowAgeNoticePromo();
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx");

export { useIsTinyBroncoEligible };
export const useShowTinyBroncoPromoSheet = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowTinyBroncoPromoSheet(visibleContent) {
  const cResult = visibleContent(576).c(4);
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  dependencyMap = noop.useRef(false);
  if (cResult[0] === markAsDismissed) {
    if (cResult[1] === visibleContent) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
  }
  const fn = function n() {
    let current = ref.current;
    if (!current) {
      current = visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
    }
    if (!current) {
      ref.current = true;
      const obj = { markAsDismissed };
      openTinyBroncoPromoSheetDefault(obj);
    }
  };
  const items = [markAsDismissed, visibleContent];
  cResult[0] = markAsDismissed;
  cResult[1] = visibleContent;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
  let obj = visibleContent(576);
}) : (function useShowTinyBroncoPromoSheet(visibleContent) {
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
});