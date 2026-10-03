// discord_app/modules/chat/native/ChatViewWrapperBase.tsx
import c from "../../../../_runtime/00576_c.js";
import LayerScope from "../../../design/components/Layers/native/LayerScope.native.tsx";
import useChatViewPointerEventsDefault from "useChatViewPointerEvents.android.tsx";
import StickyWrapper from "../../../design/components/Sticky/native/StickyWrapper.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = c.c(5);
      ({ children, stickyHeader, style } = channelId);
      const tmp4 = useChatViewPointerEventsDefault(channelId.channelId);
      if (cResult[0] === children) {
        if (cResult[1] === tmp4) {
          if (cResult[2] === stickyHeader) {
            if (cResult[3] === style) {
              let tmp5 = cResult[4];
            }
            return tmp5;
          }
        }
      }
      const tmp6 = jsx(LayerScope.LayerScope, {
        children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: tmp4, children }),
      });
      cResult[0] = children;
      cResult[1] = tmp4;
      cResult[2] = stickyHeader;
      cResult[3] = style;
      cResult[4] = tmp6;
      tmp5 = tmp6;
      const obj2 = {
        children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: tmp4, children }),
      };
    }
  : (arg0) => {
      ({ channelId, children, stickyHeader, style } = arg0);
      const tmp = useChatViewPointerEventsDefault(channelId);
      return jsx(LayerScope.LayerScope, {
        children: jsx(StickyWrapper.StickyWrapper, {
          header: stickyHeader,
          style,
          pointerEvents: useChatViewPointerEventsDefault(channelId),
          children,
        }),
      });
    };
