// discord_app/modules/chat/native/useChatWidth.tsx
import noop from "noop";
import { sum } from "../../screen/native/drawer/useDrawerWidth.tsx";
import { useBaseAppContainerDimensions } from "../../screen/native/useBaseAppContainerDimensions.tsx";
import { context } from "ChatViewWidthContext.tsx";
import { useChatLayout } from "useChatLayout.tsx";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(context);
  const width = useBaseAppContainerDimensions().width;
  sum;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (useChatLayout().isChatLockedOpen) {
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
  const tmp = require;
  const width = useBaseAppContainerDimensions.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(10883).getDrawerWidth();
      const tmpResult = tmp(10883);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};