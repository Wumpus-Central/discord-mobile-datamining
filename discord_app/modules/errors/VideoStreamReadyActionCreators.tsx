// discord_app/modules/errors/VideoStreamReadyActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export function videoStreamTimedOut(current, userId, mediaContext, streamKey) {
  DispatcherDefault.dispatch({
    type: "VIDEO_STREAM_READY_TIMEOUT",
    videoStreamId: current,
    mediaContext,
    userId,
    streamKey,
  });
}
export function clearVideoStreamTimeout(DEFAULT, userId) {
  DispatcherDefault.dispatch({ type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId });
}
