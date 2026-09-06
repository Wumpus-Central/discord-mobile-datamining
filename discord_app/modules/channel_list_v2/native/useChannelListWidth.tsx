// discord_app/modules/channel_list_v2/native/useChannelListWidth.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import useDrawerWidth from "../../screen/native/drawer/useDrawerWidth.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = useDrawerWidth.useDrawerWidth();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
}
