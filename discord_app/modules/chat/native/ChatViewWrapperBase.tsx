// discord_app/modules/chat/native/ChatViewWrapperBase.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import LayerScope2 from "../../../design/components/Layers/native/LayerScope.native.tsx";
import useChatViewPointerEventsDefault from "useChatViewPointerEvents.android.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let children;
      let stickyHeader;
      let style;
      const obj = react2;
      const cResult = obj.c(5);
      ({ children, stickyHeader, style } = channelId);
      const tmp4 = useChatViewPointerEventsDefault(channelId.channelId);
      if (cResult[0] === children) {
        if (cResult[1] === tmp4) {
          if (cResult[2] === stickyHeader) {
            let tmp5;
            if (cResult[3] === style) {
              tmp5 = cResult[4];
            }
            return tmp5;
          }
        }
      }
      const LayerScope = LayerScope2.LayerScope;
      const tmp6 = <LayerScope>{null}</LayerScope>;
      cResult[0] = children;
      cResult[1] = tmp4;
      cResult[2] = stickyHeader;
      cResult[3] = style;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let channelId;
      let children;
      let stickyHeader;
      let style;
      ({ channelId, children, stickyHeader, style } = arg0);
      useChatViewPointerEventsDefault(channelId);
      const LayerScope = LayerScope2.LayerScope;
      return <LayerScope>{null}</LayerScope>;
    };
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default tmp3;
