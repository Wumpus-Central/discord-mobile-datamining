// === Module 11144: useDrawerWidth ===

// Module 11144 (useDrawerWidth)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import useChatLayout from "useChatLayout" /* 4739 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4741 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const DM_WIDTH = Constants.DM_WIDTH;
const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react;
  const cResult = obj.c(3);
  const width = useBaseAppContainerDimensionsDefault().width;
  const tmp2 = useChatLayoutDefault();
  const isChatLockedOpen = tmp2.isChatLockedOpen;
  let tmp3 = width;
  if (tmp2.isChatBesideChannelList) {
    let bound;
    if (cResult[0] === isChatLockedOpen) {
      let tmp4;
      if (cResult[1] === width) {
        tmp4 = cResult[2];
      }
      tmp3 = tmp4;
    }
    if (isChatLockedOpen) {
      bound = c3;
    } else {
      const _Math = Math;
      bound = Math.min(closure_4, width - 32);
    }
    cResult[0] = isChatLockedOpen;
    cResult[1] = width;
    cResult[2] = bound;
    tmp4 = bound;
  }
  return tmp3;
}) : (() => {
  const width = useBaseAppContainerDimensionsDefault().width;
  const tmp = useChatLayoutDefault();
  let tmp2 = width;
  if (tmp.isChatBesideChannelList) {
    let bound;
    if (tmp.isChatLockedOpen) {
      bound = c3;
    } else {
      const _Math = Math;
      bound = Math.min(closure_4, width - 32);
    }
    tmp2 = bound;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const obj = useBaseAppContainerDimensions;
  const width = obj.getBaseAppContainerDimensions().width;
  const obj2 = useChatLayout;
  const chatLayout = obj2.getChatLayout();
  let tmp2 = width;
  if (chatLayout.isChatBesideChannelList) {
    let bound;
    if (chatLayout.isChatLockedOpen) {
      bound = c3;
    } else {
      const _Math = Math;
      bound = Math.min(closure_4, width - 32);
    }
    tmp2 = bound;
  }
  return tmp2;
};
export const useDrawerWidth = tmp3;