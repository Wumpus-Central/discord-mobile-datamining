// discord_app/modules/channel_list_v2/native/useChannelListWidth.tsx
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require("../../screen/native/drawer/useDrawerWidth.tsx") /* sum */.useDrawerWidth();
  const obj = require("../../screen/native/drawer/useDrawerWidth.tsx") /* sum */;
  const token = require("../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require("../../../ConstantsIOS.tsx") /* keys */.DM_WIDTH;
  if (require("../../chat/native/useChatLayout.tsx")().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};