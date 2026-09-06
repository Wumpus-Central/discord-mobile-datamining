// discord_app/modules/chat/native/ChatViewWrapperBase.tsx
import LayerScope from "../../../design/components/Layers/native/LayerScope.native.tsx";
import useChatViewPointerEventsDefault from "useChatViewPointerEvents.android.tsx";
import StickyWrapper from "../../../design/components/Sticky/native/StickyWrapper.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsDefault(channelId);
  return jsx(LayerScope.LayerScope, {
    children: jsx(StickyWrapper.StickyWrapper, {
      header: stickyHeader,
      style,
      pointerEvents: useChatViewPointerEventsDefault(channelId),
      children,
    }),
  });
}
