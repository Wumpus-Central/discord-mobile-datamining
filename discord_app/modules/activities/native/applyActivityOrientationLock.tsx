// === Module 19072: applyActivityOrientationLock ===

// Module 19072 (applyActivityOrientationLock)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2021 */;
import applyOrientationLock from "applyOrientationLock" /* 14653 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const tmpResult = applyOrientationLock;
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
    const tmpResult3 = applyOrientationLock;
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
    const tmpResult4 = applyOrientationLock;
  }
};