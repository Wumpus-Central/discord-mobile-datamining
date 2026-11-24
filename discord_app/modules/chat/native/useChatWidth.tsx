// === Module 11835: useChatWidth ===

// Module 11835 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5096 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5098 */;
import ChatViewWidthContextDefault from "ChatViewWidthContext" /* 11836 */;
import useDrawerWidth from "useDrawerWidth" /* 11837 */;
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