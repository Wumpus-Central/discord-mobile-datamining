// discord_app/modules/activities/native/applyActivityOrientationLock.tsx
import { OrientationLockState } from "items3";
import { applyOrientationLock } from "../../device/native/applyOrientationLock.tsx";

let result = require("set").fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

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
};