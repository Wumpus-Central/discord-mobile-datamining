// discord_app/modules/activities/native/applyActivityOrientationLock.tsx
import Constants from "../Constants.tsx";
import applyOrientationLock from "../../device/native/applyOrientationLock.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const OrientationLockState = Constants.OrientationLockState;
let result = size.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
  } else if (tmp.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
  } else if (tmp.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
  }
}
