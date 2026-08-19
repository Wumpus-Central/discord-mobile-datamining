// === Module 8676: isOrientationLockSupported ===

// Module 8676 (isOrientationLockSupported)
import obj132 from "obj132" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

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