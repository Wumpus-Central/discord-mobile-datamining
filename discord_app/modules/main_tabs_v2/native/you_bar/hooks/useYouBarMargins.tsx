// === Module 17003: useYouBarMargins ===

// Module 17003 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import useChatLayoutDefault from "useChatLayout" /* 5196 */;
import useToken from "useToken" /* 5591 */;
import YouBarConstants from "YouBarConstants" /* 17004 */;
import size from "module_2" /* 2 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export function useYouBarHorizontalMargin() {
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
}
export function useYouBarBottomMargin() {
  return Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
}