// discord_app/modules/errors/VideoStreamReadyActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, closure_1, closure_6, closure_2) {
  const obj = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext: closure_6, userId: closure_1, streamKey: closure_2 };
  obj.dispatch(obj);
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, closure_0) {
  const obj = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId: closure_0 };
  obj.dispatch(obj);
};