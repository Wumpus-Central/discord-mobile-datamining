// discord_app/modules/device/MetaQuestUtils.android.tsx
import react_nativeAll from "../../utils/native/ClientInfoUtils.tsx";
import react_native_mod from "../../../discord_common/js/packages/rtn-codegen/js/NativeMetaQuestModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

let constants;

let react_native = react_native_mod;
react_native = react_native.isMetaQuest();
const result = size.fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  const obj = react_native;
  return obj.isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  const obj = react_nativeAll;
  constants = obj.getConstants();
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
export const isThumbstickScrollDevice = react_native;
