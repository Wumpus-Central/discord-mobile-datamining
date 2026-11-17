// === Module 12627: useChatWidth ===

// Module 12627 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5489 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5491 */;
import ChatViewWidthContextDefault from "ChatViewWidthContext" /* 12628 */;
import useDrawerWidth from "useDrawerWidth" /* 12629 */;
import noop from "module_19" /* 19 */;

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
};