// === Module 9900: isOrientationLockSupported ===

// Module 9900 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4359 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1625);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4359);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};