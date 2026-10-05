// === Module 15947: useChannelListWidth ===

// Module 15947 (useChannelListWidth)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import useToken from "useToken" /* 4580 */;
import useChatLayoutDefault from "useChatLayout" /* 4739 */;
import useDrawerWidth from "useDrawerWidth" /* 11144 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
}) : (() => {
  const obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default tmp2;