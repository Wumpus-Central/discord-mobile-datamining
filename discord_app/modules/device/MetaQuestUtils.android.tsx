// discord_app/modules/device/MetaQuestUtils.android.tsx
import getConstantsAll from "getConstants" /* 1626 */;
import importDefaultResult from "enforcing" /* 670 */;

const isMetaQuestResult = importDefaultResult.isMetaQuest();
const result = require("set").fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  return importDefaultResult.isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  const constants = getConstantsAll.getConstants();
  let flag;
  if (constants != null) {
    const ReleaseChannel = constants.ReleaseChannel;
    if (ReleaseChannel != null) {
      flag = ReleaseChannel.startsWith("quest");
    }
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const isThumbstickScrollDevice = isMetaQuestResult;