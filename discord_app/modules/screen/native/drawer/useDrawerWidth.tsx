// discord_app/modules/screen/native/drawer/useDrawerWidth.tsx
import Constants from "../../../../Constants.tsx";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import useBaseAppContainerDimensions from "../useBaseAppContainerDimensions.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
};
