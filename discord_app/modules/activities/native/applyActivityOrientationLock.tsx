// === Module 16825: applyActivityOrientationLock ===

// Module 16825 (applyActivityOrientationLock)
import set from "set" /* 2 */;
import items3 from "items3" /* 4506 */;
import applyOrientationLock from "applyOrientationLock" /* 11579 */;

const OrientationLockState = items3.OrientationLockState;
let result = set.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const obj3 = applyOrientationLock;
  } else if (tmp.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
    const obj2 = applyOrientationLock;
  } else if (tmp.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
    const obj = applyOrientationLock;
  }
};