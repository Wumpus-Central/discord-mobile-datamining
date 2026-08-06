// discord_app/modules/frames/native/getDefaultOrientationLockState.tsx
import { dispatcher } from "../../../Dispatcher.tsx";
import { getIsTabletActivitySurface } from "../../activities/native/getDefaultOrientationLockState.tsx";
const result = require("set").fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(arg0, application) {
  let defaultOrientationLockState = arg2;
  if (arg2 == null) {
    let obj = getIsTabletActivitySurface;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(application);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: null, lockState: null };
    obj[1] = arg0;
    obj[2] = defaultOrientationLockState;
    dispatcher.dispatch(obj);
    const obj2 = dispatcher;
  }
};