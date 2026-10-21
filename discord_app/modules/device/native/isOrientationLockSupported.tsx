// === Module 10835: isOrientationLockSupported ===

// Module 10835 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import DeviceUtils from "DeviceUtils" /* 4923 */;
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