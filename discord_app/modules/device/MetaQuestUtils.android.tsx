// discord_app/modules/device/MetaQuestUtils.android.tsx
import getConstantsAll from "../../utils/native/ClientInfoUtils.tsx";
import importDefaultResult from "../../../discord_common/js/packages/rtn-codegen/js/NativeMetaQuestModule.tsx";

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