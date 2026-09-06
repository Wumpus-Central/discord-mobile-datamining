// discord_app/modules/frames/native/getDefaultOrientationLockState.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import getDefaultOrientationLockState from "../../activities/native/getDefaultOrientationLockState.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
