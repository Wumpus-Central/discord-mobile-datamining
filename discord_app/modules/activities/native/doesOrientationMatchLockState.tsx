// discord_app/modules/activities/native/doesOrientationMatchLockState.tsx
import { OrientationLockState } from "items3";

const result = require("set").fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

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