// === Module 15283: useChannelListWidth ===

// Module 15283 (useChannelListWidth)
import set from "set" /* 2 */;
import keys from "keys" /* 691 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import useChatLayoutDefault from "useChatLayout" /* 4232 */;
import sum from "sum" /* 10719 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = sum.useDrawerWidth();
  const obj = sum;
  const token = map.useToken(ThemesDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - keys.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};