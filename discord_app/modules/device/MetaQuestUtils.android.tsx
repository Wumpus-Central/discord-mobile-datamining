// === Module 1625: isMetaQuest ===

// Module 1625 (isMetaQuest)
import getConstantsAll from "getConstants" /* 1626 */;
import importDefaultResult from "enforcing" /* 670 */;

const isMetaQuestResult = importDefaultResult.isMetaQuest();
const result = require("obj132").fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

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