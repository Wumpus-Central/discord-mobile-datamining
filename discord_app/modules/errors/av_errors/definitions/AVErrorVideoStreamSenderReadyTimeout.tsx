// === Module 17362: AVErrorVideoStreamSenderReadyTimeoutDefinition ===

// Module 17362 (AVErrorVideoStreamSenderReadyTimeoutDefinition)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "makeTimeoutKey" /* 9430 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeout.tsx");

export const AVErrorVideoStreamSenderReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      ({ userId, videoStreamId } = arg0);
      let tmp = id.getId() === userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((arg0) => {
      const merged = Object.assign(arg0);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};