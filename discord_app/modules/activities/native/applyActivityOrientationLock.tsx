// discord_app/modules/activities/native/applyActivityOrientationLock.tsx
import set from "../../../../_runtime/00002_set.js";
import items3 from "../Constants.tsx";
import applyOrientationLock from "../../device/native/applyOrientationLock.tsx";

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
}
