// === Module 10890: ChatViewWrapperBase ===

// Module 10890 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 6572 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 10888 */;
import StickyWrapper from "StickyWrapper" /* 10889 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsDefault(channelId);
  return jsx(LayerScope.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsDefault(channelId), children }) });
};