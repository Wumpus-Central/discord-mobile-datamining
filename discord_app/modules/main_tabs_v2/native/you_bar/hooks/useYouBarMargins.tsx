// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useChatLayoutDefault from "../../../../chat/native/useChatLayout.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import VoicePanelDockLayout from "../../../../voice_panel/native/dock/VoicePanelDockLayout.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
