// === Module 11433: ChatViewWrapperBase ===

// Module 11433 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7208 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11431 */;
import StickyWrapper from "StickyWrapper" /* 11432 */;
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