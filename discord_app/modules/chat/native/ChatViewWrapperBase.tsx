// === Module 10379: ChatViewWrapperBase ===

// Module 10379 (ChatViewWrapperBase)
import c from "c" /* 576 */;
import LayerScope from "LayerScope" /* 6845 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 10377 */;
import StickyWrapper from "StickyWrapper" /* 10378 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChatViewWrapperBase(channelId) {
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
  const tmp6 = jsx(LayerScope.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: tmp4, children }) });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = stickyHeader;
  cResult[3] = style;
  cResult[4] = tmp6;
  tmp5 = tmp6;
  const obj2 = { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: tmp4, children }) };
}) : (function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsDefault(channelId);
  return jsx(LayerScope.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsDefault(channelId), children }) });
});