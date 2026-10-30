// === Module 17006: useYouBarTotalHeight ===

// Module 17006 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 17003 */;
import YouBarConstants from "YouBarConstants" /* 17004 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 17007 */;
import size from "module_2" /* 2 */;

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarMargins.useYouBarBottomMargin();
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
}