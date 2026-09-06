// === Module 16017: useChannelListWidth ===

// Module 16017 (useChannelListWidth)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import useToken from "useToken" /* 4262 */;
import useChatLayoutDefault from "useChatLayout" /* 4420 */;
import useDrawerWidth from "useDrawerWidth" /* 11528 */;
import size from "module_2" /* 2 */;

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
};