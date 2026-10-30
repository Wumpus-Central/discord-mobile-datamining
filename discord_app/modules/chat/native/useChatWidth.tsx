// discord_app/modules/chat/native/useChatWidth.tsx
import useChatLayoutDefault from "useChatLayout.tsx";
import useBaseAppContainerDimensionsDefault from "../../screen/native/useBaseAppContainerDimensions.tsx";
import ChatViewWidthContextDefault from "ChatViewWidthContext.tsx";
import useDrawerWidth from "../../screen/native/drawer/useDrawerWidth.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = noop.useContext(ChatViewWidthContextDefault);
  const width = useBaseAppContainerDimensionsDefault().width;
  useDrawerWidth;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (useChatLayoutDefault().isChatLockedOpen) {
        diff = width - tmp3;
      }
      let tmp5 = diff;
    } else {
      tmp5 = width;
    }
    context = tmp5;
  }
  return context;
}
