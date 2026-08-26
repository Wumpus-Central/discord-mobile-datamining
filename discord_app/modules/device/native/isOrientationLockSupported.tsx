// discord_app/modules/device/native/isOrientationLockSupported.tsx
import set from "../../../../_runtime/00002_set.js";
import DCDDeviceManager from "../../../utils/native/DeviceUtils.tsx";

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1625);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4423);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};