// === Module 10567: ChatViewWrapperBase ===

// Module 10567 (ChatViewWrapperBase)
import noopAll from "noop" /* 19 */;
import Layer from "Layer" /* 7126 */;
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEventsAndroid" /* 10565 */;
import StickyWrapper from "StickyWrapper" /* 10566 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};