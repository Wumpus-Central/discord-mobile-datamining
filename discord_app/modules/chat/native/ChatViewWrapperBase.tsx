// discord_app/modules/chat/native/ChatViewWrapperBase.tsx
import "noop";
import { jsx } from "jsxProd";
import { Layer } from "../../../design/components/Layers/native/LayerScope.native.tsx";
import { StickyWrapper } from "../../../design/components/Sticky/native/StickyWrapper.native.tsx";
import { useChatViewPointerEventsAndroid } from "useChatViewPointerEvents.android.tsx";

const require = arg1;
const result = require("useChatViewPointerEventsAndroid").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, children, stickyHeader, style } = arg0);
  const obj = { children: null };
  obj[0] = jsx(StickyWrapper /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroid(channelId), children });
  return jsx(Layer /* Layer */.LayerScope, { children: null });
};