// === Module 14604: useYouBarTotalHeight ===

// Module 14604 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 14601 */;
import YouBarConstants from "YouBarConstants" /* 14602 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 14605 */;
import size from "module_2" /* 2 */;

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarMargins.useYouBarBottomMargin();
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
};