// === Module 14927: useYouBarTotalHeight ===

// Module 14927 (useYouBarTotalHeight)
import set from "set" /* 2 */;
import useYouBarHorizontalMargin from "useYouBarHorizontalMargin" /* 14924 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14925 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 14928 */;

const YOU_BAR_HEIGHT = CONNECTION_BANNER_HEIGHT.YOU_BAR_HEIGHT;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarHorizontalMargin.useYouBarBottomMargin();
  const obj = useYouBarHorizontalMargin;
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
};