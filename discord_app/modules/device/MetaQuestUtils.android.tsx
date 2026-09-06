// discord_app/modules/device/MetaQuestUtils.android.tsx
import ClientInfoUtilsAll from "../../utils/native/ClientInfoUtils.tsx";
import NativeMetaQuestModule from "../../../discord_common/js/packages/rtn-codegen/js/NativeMetaQuestModule.tsx";

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
