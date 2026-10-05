// discord_app/modules/chat/native/useChatWidth.tsx
import useChatLayout from "useChatLayout.tsx";
import useBaseAppContainerDimensions from "../../screen/native/useBaseAppContainerDimensions.tsx";
import useDrawerWidth from "../../screen/native/drawer/useDrawerWidth.tsx";
import reactDefault from "ChatViewWidthContext.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let context = react.useContext(reactDefault);
      const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
      const width = useBaseAppContainerDimensionsDefault().width;
      useDrawerWidth;
      if (null == context) {
        let tmp5;
        if (null == arg0) {
          let diff = width;
          if (isChatLockedOpen) {
            diff = width - tmp3;
          }
          tmp5 = diff;
        } else {
          tmp5 = width;
        }
        context = tmp5;
      }
      return context;
    }
  : (arg0) => {
      let context = react.useContext(reactDefault);
      const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
      const width = useBaseAppContainerDimensionsDefault().width;
      useDrawerWidth;
      if (null == context) {
        let tmp5;
        if (null == arg0) {
          let diff = width;
          if (isChatLockedOpen) {
            diff = width - tmp3;
          }
          tmp5 = diff;
        } else {
          tmp5 = width;
        }
        context = tmp5;
      }
      return context;
    };
const result = size.fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default tmp2;
export const getChatWidth = function getChatWidth(arg0) {
  let tmp3;
  const obj = useChatLayout;
  const isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
  const obj2 = useBaseAppContainerDimensions;
  const width = obj2.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (isChatLockedOpen) {
      const tmpResult = useDrawerWidth;
      diff = width - tmpResult.getDrawerWidth();
    }
    tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
