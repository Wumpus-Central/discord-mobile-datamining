// === Module 10821: leaveFrame ===

// Module 10821 (leaveFrame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import FramesStore from "FramesStore" /* 10807 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/leaveFrame.tsx");

export const leaveFrame = function leaveFrame(id) {
  if (obj.isNotNullish(id)) {
    const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: id, lockState: null, pictureInPictureLockState: null };
    DispatcherDefault.dispatch(obj3);
  }
  const frame = FramesStore.getFrame(id);
  if (null != frame) {
    ({ applicationId: obj5.applicationId, id: obj5.frameId } = frame);
    DispatcherDefault.dispatch({ type: "FRAME_STOP", applicationId: null, frameId: null });
    const obj7 = { type: "FRAME_STOP", applicationId: null, frameId: null };
  }
  obj = GlobalUtils;
};