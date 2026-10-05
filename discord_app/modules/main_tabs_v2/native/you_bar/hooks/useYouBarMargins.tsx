// === Module 14898: useYouBarMargins ===

// Module 14898 (useYouBarMargins)
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useToken from "useToken" /* 4580 */;
import YouBarConstants from "YouBarConstants" /* 14899 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    let tmp3;
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      tmp3 = _false;
    }
    return tmp3;
  }
  tmp3 = React3;
};
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
}) : (() => {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
});
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = fn;
export const useYouBarBottomMargin = tmp4;