// === Module 13848: applyOrientationLock ===

// Module 13848 (applyOrientationLock)
import DeviceOrientation from "DeviceOrientation" /* 8910 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 10013 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export function applyOrientationLock(PORTRAIT) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    DeviceOrientation.lockOrientation(PORTRAIT, flag);
  }
}
export function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    const obj2 = { unlockAfterRotatingToPreviousLock: unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock };
    DeviceOrientation.unlockOrientation(obj2);
  }
}
export function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = DeviceOrientation.restoreDefaultOrientation();
  }
}