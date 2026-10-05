// discord_app/modules/activities/native/doesOrientationMatchLockState.tsx
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const OrientationLockState = Constants.OrientationLockState;
const result = size.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = null == arg1 || arg1 === OrientationLockState.UNLOCKED;
  let tmp3 = arg0;
  if (!tmp) {
    tmp = !tmp3 && arg1 === OrientationLockState.PORTRAIT;
    const tmp4 = !tmp3 && arg1 === OrientationLockState.PORTRAIT;
  }
  if (!tmp) {
    if (tmp3) {
      tmp3 = arg1 === OrientationLockState.LANDSCAPE;
    }
    tmp = tmp3;
  }
  return tmp;
}
