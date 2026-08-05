// discord_app/modules/frames/native/getDefaultOrientationLockState.tsx
const result = require("set").fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(id) {
  let defaultOrientationLockState = arg1;
  if (arg1 == null) {
    let obj = require("../../activities/native/getDefaultOrientationLockState.tsx") /* getIsTabletActivitySurface */;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(id);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: null, lockState: null };
    obj[1] = id.id;
    obj[2] = defaultOrientationLockState;
    require("../../../Dispatcher.tsx").dispatch(obj);
    const obj2 = require("../../../Dispatcher.tsx");
  }
};