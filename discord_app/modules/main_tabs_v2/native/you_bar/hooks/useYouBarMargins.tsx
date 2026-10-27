// === Module 16482: useYouBarMargins ===

// Module 16482 (useYouBarMargins)
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useChatLayoutDefault from "useChatLayout" /* 5154 */;
import useToken from "useToken" /* 5253 */;
import YouBarConstants from "YouBarConstants" /* 16483 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarHorizontalMargin() {
  if (useChatLayoutDefault().isChatBesideChannelList) {
    let tmp4 = React4;
  } else {
    if (tmp2 > 0) {
      if (obj.isIOS()) {
        tmp4 = React3;
      }
      obj = utils_PlatformUtils;
    }
    tmp4 = React4;
  }
  return tmp4;
}) : (function useYouBarHorizontalMargin() {
  if (useChatLayoutDefault().isChatBesideChannelList) {
    let tmp4 = React4;
  } else {
    if (tmp2 > 0) {
      if (obj.isIOS()) {
        tmp4 = React3;
      }
      obj = utils_PlatformUtils;
    }
    tmp4 = React4;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = tmp3;
export const useYouBarBottomMargin = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarBottomMargin() {
  return Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
}) : (function useYouBarBottomMargin() {
  return Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
});