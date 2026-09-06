// === Module 11527: useChatWidth ===

// Module 11527 (useChatWidth)
import useChatLayout from "useChatLayout" /* 4420 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4422 */;
import useDrawerWidth from "useDrawerWidth" /* 11528 */;
import ChatViewWidthContextDefault from "ChatViewWidthContext" /* 11529 */;
import noop from "module_19" /* 19 */;

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

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
export const getChatWidth = function getChatWidth(arg0) {
  const obj = useChatLayout;
  const width = useBaseAppContainerDimensions.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - useDrawerWidth.getDrawerWidth();
      const tmpResult = useDrawerWidth;
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};