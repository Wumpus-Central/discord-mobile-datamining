// === Module 16228: applyActivityOrientationLock ===

// Module 16228 (applyActivityOrientationLock)
import obj132 from "obj132" /* 2 */;
import items3 from "items3" /* 4481 */;
import applyOrientationLock from "applyOrientationLock" /* 10964 */;

const OrientationLockState = items3.OrientationLockState;
let result = obj132.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
  } else if (OrientationLockState.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
  } else if (OrientationLockState.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
  }
};