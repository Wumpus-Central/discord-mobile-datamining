// === Module 9486: isOrientationLockSupported ===

// Module 9486 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4427 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1624);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4427);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};