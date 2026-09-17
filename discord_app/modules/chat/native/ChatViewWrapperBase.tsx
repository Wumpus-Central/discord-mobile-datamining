// === Module 11515: ChatViewWrapperBase ===

// Module 11515 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7270 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11513 */;
import StickyWrapper from "StickyWrapper" /* 11514 */;
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