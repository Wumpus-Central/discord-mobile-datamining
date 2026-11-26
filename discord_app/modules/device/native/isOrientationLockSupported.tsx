// === Module 10013: isOrientationLockSupported ===

// Module 10013 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import DeviceUtils from "DeviceUtils" /* 5000 */;
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