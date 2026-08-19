// === Module 14452: useYouBarTotalHeight ===

// Module 14452 (useYouBarTotalHeight)
import obj132 from "obj132" /* 2 */;
import useYouBarHorizontalMargin from "useYouBarHorizontalMargin" /* 14449 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14450 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 14453 */;

const YOU_BAR_HEIGHT = CONNECTION_BANNER_HEIGHT.YOU_BAR_HEIGHT;
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarHorizontalMargin.useYouBarBottomMargin();
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
};