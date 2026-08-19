// discord_app/modules/channel_list_v2/native/useChannelListWidth.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import keys from "../../../ConstantsIOS.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import sum from "../../screen/native/drawer/useDrawerWidth.tsx";

const result = obj132.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = sum.useDrawerWidth();
  const token = map.useToken(ThemesDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - keys.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};