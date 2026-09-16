// === Module 11507: ChatViewWrapperBase ===

// Module 11507 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7266 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11505 */;
import StickyWrapper from "StickyWrapper" /* 11506 */;
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