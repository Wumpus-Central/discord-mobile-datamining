// === Module 9472: isOrientationLockSupported ===

// Module 9472 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4539 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1608);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4539);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};