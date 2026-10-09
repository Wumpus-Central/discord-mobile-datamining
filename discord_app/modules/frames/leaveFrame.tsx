// discord_app/modules/frames/leaveFrame.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import FramesStore from "FramesStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/leaveFrame.tsx");

export const leaveFrame = function leaveFrame(id) {
  if (obj.isNotNullish(id)) {
    const obj3 = {
      type: "FRAME_SET_ORIENTATION_LOCK_STATE",
      frameId: id,
      lockState: null,
      pictureInPictureLockState: null,
    };
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
