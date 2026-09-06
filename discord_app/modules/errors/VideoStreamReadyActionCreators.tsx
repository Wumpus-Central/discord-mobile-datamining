// discord_app/modules/errors/VideoStreamReadyActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, userId, mediaContext, streamKey) {
  const obj = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext, userId, streamKey };
  obj.dispatch(obj);
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, userId) {
  const obj = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId };
  obj.dispatch(obj);
};
