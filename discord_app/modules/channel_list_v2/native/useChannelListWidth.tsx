// === Module 16017: useChannelListWidth ===

// Module 16017 (useChannelListWidth)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 576 */;
import keys from "keys" /* 1093 */;
import map from "map" /* 4262 */;
import useChatLayoutDefault from "useChatLayout" /* 4420 */;
import sum from "sum" /* 11528 */;

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