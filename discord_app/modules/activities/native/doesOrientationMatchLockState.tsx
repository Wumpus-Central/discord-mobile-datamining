// === Module 10807: doesOrientationMatchLockState ===

// Module 10807 (doesOrientationMatchLockState)
import set from "set" /* 2 */;
import items3 from "items3" /* 4408 */;

const OrientationLockState = items3.OrientationLockState;
const result = set.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = null == arg1;
  if (!tmp) {
    tmp = arg1 === OrientationLockState.UNLOCKED;
  }
  let tmp3 = arg0;
  if (!tmp) {
    let tmp4 = !tmp3;
    if (!tmp3) {
      tmp4 = arg1 === OrientationLockState.PORTRAIT;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    if (tmp3) {
      tmp3 = arg1 === OrientationLockState.LANDSCAPE;
    }
    tmp = tmp3;
  }
  return tmp;
};