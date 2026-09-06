// === Module 16616: frames/getDefaultOrientationLockState ===

// Module 16616 (frames/getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 573 */;
import getDefaultOrientationLockState from "getDefaultOrientationLockState" /* 9634 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(frameId, application, arg2) {
  let defaultOrientationLockState = arg2;
  if (arg2 == null) {
    let obj = getDefaultOrientationLockState;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(application);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId, lockState: defaultOrientationLockState };
    DispatcherDefault.dispatch(obj);
  }
};