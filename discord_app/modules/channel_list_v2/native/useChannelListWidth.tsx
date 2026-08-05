// discord_app/modules/channel_list_v2/native/useChannelListWidth.tsx
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { keys } from "../../../ConstantsIOS.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { useChatLayout } from "../../chat/native/useChatLayout.tsx";
import { sum } from "../../screen/native/drawer/useDrawerWidth.tsx";
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = sum /* sum */.useDrawerWidth();
  const obj = sum /* sum */;
  const token = map /* map */.useToken(Themes.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - keys /* keys */.DM_WIDTH;
  if (useChatLayout().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};