// discord_app/modules/activities/native/applyActivityOrientationLock.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import items3 from "../Constants.tsx";
import applyOrientationLock from "../../device/native/applyOrientationLock.tsx";

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