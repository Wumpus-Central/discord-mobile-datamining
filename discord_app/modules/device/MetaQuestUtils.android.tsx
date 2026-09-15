// === Module 1609: MetaQuestUtils ===

// Module 1609 (MetaQuestUtils)
import ClientInfoUtilsAll from "ClientInfoUtils" /* 1363 */;
import NativeMetaQuestModule_mod from "NativeMetaQuestModule" /* 1341 */;

let NativeMetaQuestModule = NativeMetaQuestModule_mod;
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