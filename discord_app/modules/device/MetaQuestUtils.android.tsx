// === Module 1608: MetaQuestUtils ===

// Module 1608 (MetaQuestUtils)
import ClientInfoUtilsAll from "ClientInfoUtils" /* 1364 */;
import NativeMetaQuestModule from "NativeMetaQuestModule" /* 1342 */;

NativeMetaQuestModule = NativeMetaQuestModule.isMetaQuest();
const size = fn(2);
const result = size.fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  return NativeMetaQuestModule.isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  constants = ClientInfoUtilsAll.getConstants();
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
export const isThumbstickScrollDevice = NativeMetaQuestModule;