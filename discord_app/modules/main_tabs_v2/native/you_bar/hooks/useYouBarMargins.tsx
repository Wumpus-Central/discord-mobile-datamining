// === Module 17587: useYouBarMargins ===

// Module 17587 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useChatLayoutDefault from "useChatLayout" /* 5432 */;
import useToken from "useToken" /* 5839 */;
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11947 */;
import YouBarConstants from "YouBarConstants" /* 17588 */;
import size from "module_2" /* 2 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export function useYouBarHorizontalMargin() {
  if (useChatLayoutDefault().isChatBesideChannelList) {
    let tmp4 = React4;
  } else {
    if (useSafeAreaInsetsDefault().bottom > 0) {
      if (obj.isIOS()) {
        if (!tmp2) {
          tmp4 = React3;
        }
      }
      obj = utils_PlatformUtils;
    }
    tmp4 = React4;
  }
  return tmp4;
}
export function useYouBarBottomMargin() {
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(token, useSafeAreaInsetsDefault().bottom, useVoicePanelDockHeightDefault());
}