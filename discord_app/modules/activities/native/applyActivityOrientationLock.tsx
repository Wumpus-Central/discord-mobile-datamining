// discord_app/modules/activities/native/applyActivityOrientationLock.tsx
import { OrientationLockState } from "items3";
import { handleOrientationChange } from "../../device/native/DeviceOrientation.tsx";
import { isOrientationLockSupported } from "../../device/native/isOrientationLockSupported.tsx";

const result = require("handleOrientationChange").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (isOrientationLockSupported()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      handleOrientationChange.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
      const obj3 = handleOrientationChange;
    } else if (tmp3.PORTRAIT === arg0) {
      handleOrientationChange.lockOrientation("PORTRAIT", true);
      const obj2 = handleOrientationChange;
    } else if (tmp3.LANDSCAPE === arg0) {
      handleOrientationChange.lockOrientation("LANDSCAPE", true);
      const obj = handleOrientationChange;
    }
  }
};