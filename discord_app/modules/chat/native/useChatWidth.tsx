// discord_app/modules/chat/native/useChatWidth.tsx
import useChatLayout from "useChatLayout.tsx";
import useChatLayoutDefault from "useChatLayout.tsx";
import useBaseAppContainerDimensions from "../../screen/native/useBaseAppContainerDimensions.tsx";
import useBaseAppContainerDimensionsDefault from "../../screen/native/useBaseAppContainerDimensions.tsx";
import sum from "../../screen/native/drawer/useDrawerWidth.tsx";
import contextDefault from "ChatViewWidthContext.tsx";
import noop from "../../../../_runtime/00019_noop.js";

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