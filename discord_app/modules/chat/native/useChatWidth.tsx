// discord_app/modules/chat/native/useChatWidth.tsx
import noop from "noop";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(require("ChatViewWidthContext.tsx"));
  const width = require("../../screen/native/useBaseAppContainerDimensions.tsx")().width;
  require("../../screen/native/drawer/useDrawerWidth.tsx") /* sum */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (require("useChatLayout.tsx")().isChatLockedOpen) {
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
  const obj = require("useChatLayout.tsx") /* useChatLayout */;
  const tmp = require;
  const width = require("../../screen/native/useBaseAppContainerDimensions.tsx") /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(10911).getDrawerWidth();
      const tmpResult = tmp(10911);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};