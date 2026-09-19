// === Module 18294: AVErrorVideoStreamSenderReadyTimeout ===

// Module 18294 (AVErrorVideoStreamSenderReadyTimeout)
import AVError from "AVError" /* 9685 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 9616 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeout.tsx");

export const AVErrorVideoStreamSenderReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      ({ userId, videoStreamId } = item);
      let tmp = id.getId() === userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((item) => {
      const merged = Object.assign(item);
      return { type: AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};