// === Module 11042: sum ===

// Module 11042 (sum)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import useChatLayout from "useChatLayout" /* 4302 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4304 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4304 */;

const DM_WIDTH = ME.DM_WIDTH;
const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
const result = set.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const width = useBaseAppContainerDimensions.getBaseAppContainerDimensions().width;
  const obj = useBaseAppContainerDimensions;
  const chatLayout = useChatLayout.getChatLayout();
  if (!chatLayout.isChatBesideChannelList) {
    return width;
  } else if (tmp2) {
    let bound = closure_3;
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
    let bound = closure_3;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
};