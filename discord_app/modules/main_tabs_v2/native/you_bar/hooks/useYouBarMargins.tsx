// === Module 15349: useYouBarMargins ===

// Module 15349 (useYouBarMargins)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useToken from "useToken" /* 4818 */;
import YouBarConstants from "YouBarConstants" /* 15350 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
export const useYouBarBottomMargin = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarBottomMargin() {
  return Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
}) : (function useYouBarBottomMargin() {
  return Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
});