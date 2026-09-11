// === Module 15158: useYouBarTotalHeight ===

// Module 15158 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 15155 */;
import YouBarConstants from "YouBarConstants" /* 15156 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 15159 */;
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