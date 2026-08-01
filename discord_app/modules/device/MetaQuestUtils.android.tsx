// === Module 1577: isMetaQuest ===

// Module 1577 (isMetaQuest)
import importDefaultResult from "enforcing";

const isMetaQuestResult = require("enforcing").isMetaQuest();
const result = require("set").fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  return importDefault(670).isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  const constants = importAll(1578).getConstants();
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