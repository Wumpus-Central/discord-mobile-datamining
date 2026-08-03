// === Module 11025: useChatWidth ===

// Module 11025 (useChatWidth)
import noop from "noop";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(11027));
  const width = importDefault(4111)().width;
  require(11026) /* sum */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(4109)().isChatLockedOpen) {
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
  const obj = require(4109) /* useChatLayout */;
  const tmp = require;
  const width = require(4111) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(11026).getDrawerWidth();
      const tmpResult = tmp(11026);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};