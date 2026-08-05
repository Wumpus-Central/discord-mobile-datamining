// discord_app/modules/screen/native/drawer/useDrawerWidth.tsx
import { DM_WIDTH } from "ME";

const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
const result = require("useChatLayout").fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const width = require("../useBaseAppContainerDimensions.tsx") /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  const obj = require("../useBaseAppContainerDimensions.tsx") /* useBaseAppContainerDimensions */;
  const chatLayout = require("../../../chat/native/useChatLayout.tsx") /* useChatLayout */.getChatLayout();
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
  const width = require("../useBaseAppContainerDimensions.tsx")().width;
  if (!tmp.isChatBesideChannelList) {
    return width;
  } else if (tmp2) {
    let bound = closure_3;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
};