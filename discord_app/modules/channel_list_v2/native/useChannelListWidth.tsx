// discord_app/modules/channel_list_v2/native/useChannelListWidth.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useDrawerWidth from "../../screen/native/drawer/useDrawerWidth.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelListWidth() {
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
    }
  : function useChannelListWidth() {
      const drawerWidth = useDrawerWidth.useDrawerWidth({ whileSliding: "wider" });
      const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
      let num = 0;
      const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
      if (useChatLayoutDefault().isChatBesideChannelList) {
        num = token;
      }
      return diff - num;
    };
