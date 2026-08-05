// discord_app/modules/activities/utils/leaveCurrentFrame.tsx
import map from "map";
import { getFramesManager } from "../../frames/utils/getFramesManager.native.tsx";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = getFramesManager();
    obj = { applicationId: null };
    obj[0] = connectedFrame.applicationId;
    obj.leaveFrame(obj);
  }
};