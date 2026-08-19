// discord_app/modules/activities/native/doesOrientationMatchLockState.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import items3 from "../Constants.tsx";

const OrientationLockState = items3.OrientationLockState;
const result = obj132.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = null == arg1;
  if (!tmp) {
    tmp = arg1 === OrientationLockState.UNLOCKED;
  }
  let tmp3 = arg0;
  if (!tmp) {
    let tmp4 = !tmp3;
    if (!tmp3) {
      tmp4 = arg1 === OrientationLockState.PORTRAIT;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    if (tmp3) {
      tmp3 = arg1 === OrientationLockState.LANDSCAPE;
    }
    tmp = tmp3;
  }
  return tmp;
};