// === Module 11528: useDrawerWidth ===

// Module 11528 (useDrawerWidth)
import Constants from "Constants" /* 1074 */;
import useChatLayout from "useChatLayout" /* 4420 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4422 */;
import size from "module_2" /* 2 */;

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const DM_WIDTH = Constants.DM_WIDTH;
const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const width = useBaseAppContainerDimensions.getBaseAppContainerDimensions().width;
  const chatLayout = useChatLayout.getChatLayout();
  if (!chatLayout.isChatBesideChannelList) {
    return width;
  } else if (tmp2) {
    let bound = sum;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
};
export const useDrawerWidth = function useDrawerWidth() {
  const width = useBaseAppContainerDimensionsDefault().width;
  if (!tmp.isChatBesideChannelList) {
    return width;
  } else if (tmp2) {
    let bound = sum;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
  tmp = useChatLayoutDefault();
};