// === Module 11740: ChatViewWrapperBase ===

// Module 11740 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 5401 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11738 */;
import StickyWrapper from "StickyWrapper" /* 11739 */;
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