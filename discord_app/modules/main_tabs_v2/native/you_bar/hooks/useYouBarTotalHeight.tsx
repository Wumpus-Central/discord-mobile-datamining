// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx
import useYouBarMargins from "useYouBarMargins.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import useConnectionBannerHeight from "useConnectionBannerHeight.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
