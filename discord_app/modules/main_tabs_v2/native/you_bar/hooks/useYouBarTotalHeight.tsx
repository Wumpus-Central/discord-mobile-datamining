// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx
import useYouBarMargins from "useYouBarMargins.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import useConnectionBannerHeight from "useConnectionBannerHeight.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let num = 0;
      if (undefined !== arg0) {
        num = arg0;
      }
      const obj = useYouBarMargins;
      const youBarBottomMargin = obj.useYouBarBottomMargin();
      const obj2 = useConnectionBannerHeight;
      return youBarBottomMargin + YOU_BAR_HEIGHT + obj2.useConnectionBannerHeight() + num;
    }
  : () => {
      let num = arg0;
      if (arg0 === undefined) {
        num = 0;
      }
      const obj = useYouBarMargins;
      const youBarBottomMargin = obj.useYouBarBottomMargin();
      const obj2 = useConnectionBannerHeight;
      return youBarBottomMargin + YOU_BAR_HEIGHT + obj2.useConnectionBannerHeight() + num;
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = tmp2;
