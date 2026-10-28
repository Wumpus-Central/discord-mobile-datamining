// === Module 17723: useChannelListWidth ===

// Module 17723 (useChannelListWidth)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import useChatLayoutDefault from "useChatLayout" /* 5189 */;
import useToken from "useToken" /* 5288 */;
import useDrawerWidth from "useDrawerWidth" /* 11265 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelListWidth() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { whileSliding: "wider" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const drawerWidth = useDrawerWidth.useDrawerWidth(first);
  const tmpResult = useDrawerWidth;
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num2 = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num2 = token;
  }
  return diff - num2;
}) : (function useChannelListWidth() {
  const drawerWidth = useDrawerWidth.useDrawerWidth({ whileSliding: "wider" });
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
});