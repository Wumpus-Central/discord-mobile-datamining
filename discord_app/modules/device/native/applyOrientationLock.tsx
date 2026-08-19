// === Module 10964: applyOrientationLock ===

// Module 10964 (applyOrientationLock)
import obj132 from "obj132" /* 2 */;
import handleOrientationChange from "handleOrientationChange" /* 8671 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 8676 */;

let result = obj132.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    handleOrientationChange.lockOrientation(PORTRAIT, flag);
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    const obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = handleOrientationChange.restoreDefaultOrientation();
  }
};