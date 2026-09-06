// === Module 11785: applyOrientationLock ===

// Module 11785 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 8332 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9472 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    DeviceOrientation.lockOrientation(PORTRAIT, flag);
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    const obj = { unlockAfterRotatingToPreviousLock: unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock };
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = DeviceOrientation.restoreDefaultOrientation();
  }
};