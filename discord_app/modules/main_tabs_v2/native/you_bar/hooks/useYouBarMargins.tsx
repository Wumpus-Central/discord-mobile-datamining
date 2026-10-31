// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useChatLayoutDefault from "../../../../chat/native/useChatLayout.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import useVoicePanelDockHeightDefault from "../../../../voice_panel/native/dock/useVoicePanelDockHeight.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(token, useSafeAreaInsetsDefault().bottom, useVoicePanelDockHeightDefault());
}
