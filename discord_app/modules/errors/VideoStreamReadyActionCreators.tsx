// === Module 10857: videoStreamTimedOut ===

// Module 10857 (videoStreamTimedOut)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, closure_1, closure_6, closure_2) {
  let obj = dispatcherDefault;
  obj = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext: closure_6, userId: closure_1, streamKey: closure_2 };
  obj.dispatch(obj);
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, closure_0) {
  let obj = dispatcherDefault;
  obj = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId: closure_0 };
  obj.dispatch(obj);
};