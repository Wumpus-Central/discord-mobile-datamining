const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10904) /* sum */.useDrawerWidth();
  const obj = require(10904) /* sum */;
  const token = require(3897) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4047)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};