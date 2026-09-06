// discord_app/modules/device/native/applyOrientationLock.tsx
import DeviceOrientation from "DeviceOrientation.tsx";
import isOrientationLockSupportedDefault from "isOrientationLockSupported.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    DeviceOrientation.lockOrientation(PORTRAIT, flag);
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    const obj = {
      unlockAfterRotatingToPreviousLock: unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock,
    };
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = DeviceOrientation.restoreDefaultOrientation();
  }
};
