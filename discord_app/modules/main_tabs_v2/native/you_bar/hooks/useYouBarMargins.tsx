// === Module 17700: useYouBarMargins ===

// Module 17700 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1360 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useChatLayoutDefault from "useChatLayout" /* 5495 */;
import useToken from "useToken" /* 5902 */;
import VoicePanelDockLayout from "VoicePanelDockLayout" /* 12008 */;
import YouBarConstants from "YouBarConstants" /* 17701 */;
import size from "module_2" /* 2 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export function useYouBarHorizontalMargin() {
  VoicePanelDockLayout;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    let tmp5 = React4;
  } else {
    if (useSafeAreaInsetsDefault().bottom > 0) {
      if (tmp2Result.isIOS()) {
        if (!tmp4) {
          tmp5 = React3;
        }
      }
      tmp2Result = utils_PlatformUtils;
    }
    tmp5 = React4;
  }
  return tmp5;
}
export function useYouBarBottomMargin() {
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(token, useSafeAreaInsetsDefault().bottom, VoicePanelDockLayout.useVoicePanelDockHeight());
}