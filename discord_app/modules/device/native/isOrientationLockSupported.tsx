// discord_app/modules/device/native/isOrientationLockSupported.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isMetaQuest from "../MetaQuestUtils.android.tsx";
import DCDDeviceManager from "../../../utils/native/DeviceUtils.tsx";

let result = obj132.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = isMetaQuest;
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = DCDDeviceManager;
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};