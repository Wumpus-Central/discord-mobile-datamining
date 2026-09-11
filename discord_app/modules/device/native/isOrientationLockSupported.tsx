// === Module 9563: isOrientationLockSupported ===

// Module 9563 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import DeviceUtils from "DeviceUtils" /* 4585 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = MetaQuestUtils;
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = DeviceUtils;
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};