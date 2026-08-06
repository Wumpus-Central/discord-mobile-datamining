// discord_app/modules/activities/utils/leaveCurrentFrame.tsx
import map from "map";
import { getFramesManager } from "../../frames/utils/getFramesManager.native.tsx";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  mainFrame = mainFrame.getMainFrame();
  if (null != mainFrame) {
    getFramesManager().leaveFrame(mainFrame.id);
    const obj = getFramesManager();
  }
};