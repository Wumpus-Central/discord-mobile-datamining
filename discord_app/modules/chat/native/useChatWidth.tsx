// === Module 10718: useChatWidth ===

// Module 10718 (useChatWidth)
import useChatLayout from "useChatLayout" /* 4232 */;
import useChatLayoutDefault from "useChatLayout" /* 4232 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4234 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4234 */;
import sum from "sum" /* 10719 */;
import contextDefault from "context" /* 10720 */;
import noop from "noop" /* 19 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(contextDefault);
  const width = useBaseAppContainerDimensionsDefault().width;
  sum;
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
      diff = width - sum.getDrawerWidth();
      const tmpResult = sum;
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};