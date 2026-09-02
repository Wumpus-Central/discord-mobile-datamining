// === Module 11218: ChatViewWrapperBase ===

// Module 11218 (ChatViewWrapperBase)
import noopAll from "noop" /* 19 */;
import Layer from "Layer" /* 5948 */;
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEventsAndroid" /* 11216 */;
import StickyWrapper from "StickyWrapper" /* 11217 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};