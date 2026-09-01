// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx
import set from "../../../../../../_runtime/00002_set.js";
import useYouBarHorizontalMargin from "useYouBarMargins.tsx";
import CONNECTION_BANNER_HEIGHT from "../YouBarConstants.tsx";
import useConnectionBannerHeight from "useConnectionBannerHeight.tsx";

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
