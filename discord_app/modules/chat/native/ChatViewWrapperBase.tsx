// discord_app/modules/chat/native/ChatViewWrapperBase.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useChatViewPointerEventsAndroid").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, children, stickyHeader, style } = arg0);
  const obj = { children: null };
  obj[0] = jsx(require("../../../design/components/Sticky/native/StickyWrapper.native.tsx") /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: require("useChatViewPointerEvents.android.tsx")(channelId), children });
  return jsx(require("../../../design/components/Layers/native/LayerScope.native.tsx") /* Layer */.LayerScope, { children: null });
};