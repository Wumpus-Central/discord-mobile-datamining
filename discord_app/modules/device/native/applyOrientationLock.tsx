// === Module 11289: applyOrientationLock ===

// Module 11289 (applyOrientationLock)
import set from "set" /* 2 */;
import handleOrientationChange from "handleOrientationChange" /* 8549 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9464 */;

let result = set.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    handleOrientationChange.lockOrientation(PORTRAIT, flag);
    const obj = handleOrientationChange;
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    let obj = handleOrientationChange;
    obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = handleOrientationChange.restoreDefaultOrientation();
    const obj = handleOrientationChange;
  }
};