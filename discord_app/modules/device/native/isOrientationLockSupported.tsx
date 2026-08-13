// discord_app/modules/device/native/isOrientationLockSupported.tsx
import { DCDDeviceManager } from "../../../utils/native/DeviceUtils.tsx";
let result = require("set").fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1624);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4322);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};