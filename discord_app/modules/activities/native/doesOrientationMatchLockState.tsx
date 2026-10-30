// === Module 11757: doesOrientationMatchLockState ===

// Module 11757 (doesOrientationMatchLockState)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2021 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = null == arg1;
  if (!tmp) {
    tmp = arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
  }
  let tmp4 = arg0;
  if (!tmp) {
    let tmp5 = !tmp4;
    if (!tmp4) {
      tmp5 = arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT;
    }
    tmp = tmp5;
  }
  if (!tmp) {
    if (tmp4) {
      tmp4 = arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE;
    }
    tmp = tmp4;
  }
  return tmp;
};