// discord_app/modules/device/MetaQuestUtils.android.tsx
import importDefaultResult from "enforcing";
import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeMetaQuestModule.tsx";

const isMetaQuestResult = require("enforcing").isMetaQuest();
const result = require("set").fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  return enforcing.isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  const constants = importAll(1606).getConstants();
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