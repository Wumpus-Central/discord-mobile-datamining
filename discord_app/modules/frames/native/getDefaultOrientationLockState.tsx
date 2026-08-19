// === Module 16264: setOrientationLockState ===

// Module 16264 (setOrientationLockState)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getIsTabletActivitySurface from "getIsTabletActivitySurface" /* 12467 */;

const result = obj132.fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

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
    dispatcherDefault.dispatch(obj);
  }
};