// discord_app/modules/device/native/isOrientationLockSupported.tsx
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
