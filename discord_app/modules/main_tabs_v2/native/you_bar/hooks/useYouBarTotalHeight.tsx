import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14242) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14242) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14246) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};