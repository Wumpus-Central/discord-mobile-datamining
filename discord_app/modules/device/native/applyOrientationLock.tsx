// === Module 11270: applyOrientationLock ===

// Module 11270 (applyOrientationLock)
import set from "set" /* 2 */;
import handleOrientationChange from "handleOrientationChange" /* 8534 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9446 */;

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