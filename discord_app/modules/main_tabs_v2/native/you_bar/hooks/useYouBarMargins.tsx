// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
function useYouBarHorizontalMargin() {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = React3;
    }
    return tmp3;
  }
  tmp3 = React4;
}
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export { useYouBarHorizontalMargin };
export const useYouBarBottomMargin = ReactCompilerGating.isReactCompilerEnabled()
  ? function useYouBarBottomMargin() {
      return Math.max(
        useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM),
        useSafeAreaInsetsDefault().bottom,
      );
    }
  : function useYouBarBottomMargin() {
      return Math.max(
        useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM),
        useSafeAreaInsetsDefault().bottom,
      );
    };
