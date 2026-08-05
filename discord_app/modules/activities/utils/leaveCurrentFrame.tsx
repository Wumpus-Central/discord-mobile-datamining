// discord_app/modules/activities/utils/leaveCurrentFrame.tsx
import map from "map";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = require("../../frames/utils/getFramesManager.native.tsx")();
    obj = { applicationId: null };
    obj[0] = connectedFrame.applicationId;
    obj.leaveFrame(obj);
  }
};