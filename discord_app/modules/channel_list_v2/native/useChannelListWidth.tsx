// === Module 15839: useChannelListWidth ===

// Module 15839 (useChannelListWidth)
import set from "set" /* 2 */;
import keys from "keys" /* 688 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import useChatLayoutDefault from "useChatLayout" /* 4335 */;
import sum from "sum" /* 11347 */;

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