import { useConnectionBannerHeight } from "useConnectionBannerHeight.tsx";
import { useYouBarHorizontalMargin } from "useYouBarMargins.tsx";
// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarHorizontalMargin /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = useYouBarHorizontalMargin /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};