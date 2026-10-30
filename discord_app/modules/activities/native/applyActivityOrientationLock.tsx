// discord_app/modules/activities/native/applyActivityOrientationLock.tsx
import EmbeddedActivityOrientationLockState from "../../../../discord_common/js/shared/shared-constants/EmbeddedActivityOrientationLockState.tsx";
import applyOrientationLock from "../../device/native/applyOrientationLock.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
    const tmpResult = applyOrientationLock;
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
    const tmpResult3 = applyOrientationLock;
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
    const tmpResult4 = applyOrientationLock;
  }
}
