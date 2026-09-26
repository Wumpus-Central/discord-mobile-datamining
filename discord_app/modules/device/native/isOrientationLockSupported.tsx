// === Module 8834: isOrientationLockSupported ===

// Module 8834 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    result = !MetaQuestUtils.isMetaQuest();
    const tmpResult = MetaQuestUtils;
  }
  if (result) {
    result = DeviceUtils.isOrientationLockSupported();
    const tmpResult2 = DeviceUtils;
  }
  return result;
};