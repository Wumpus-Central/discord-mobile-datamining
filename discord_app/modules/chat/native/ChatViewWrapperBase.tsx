// discord_app/modules/chat/native/ChatViewWrapperBase.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Layer from "../../../design/components/Layers/native/LayerScope.native.tsx";
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEvents.android.tsx";
import StickyWrapper from "../../../design/components/Sticky/native/StickyWrapper.native.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};