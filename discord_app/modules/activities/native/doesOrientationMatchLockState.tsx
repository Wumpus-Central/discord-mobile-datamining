// discord_app/modules/activities/native/doesOrientationMatchLockState.tsx
import EmbeddedActivityOrientationLockState from "../../../../discord_common/js/shared/shared-constants/EmbeddedActivityOrientationLockState.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = null == arg1;
  if (!tmp) {
    tmp = arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
  }
  let tmp4 = arg0;
  if (!tmp) {
    let tmp5 = !tmp4;
    if (!tmp4) {
      tmp5 = arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT;
    }
    tmp = tmp5;
  }
  if (!tmp) {
    if (tmp4) {
      tmp4 = arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE;
    }
    tmp = tmp4;
  }
  return tmp;
}
