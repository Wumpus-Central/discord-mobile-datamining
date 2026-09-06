// === Module 17850: AVErrorVideoStreamReceiverReadyTimeoutNoStream ===

// Module 17850 (AVErrorVideoStreamReceiverReadyTimeoutNoStream)
import AVError from "AVError" /* 9110 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 9477 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeoutNoStream.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition = {
  getActiveErrors() {
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      ({ userId, videoStreamId } = item);
      let tmp = id.getId() !== userId;
      if (tmp) {
        tmp = null == videoStreamId;
      }
      return tmp;
    });
    return found.map((item) => {
      const merged = Object.assign(item);
      return { type: AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};