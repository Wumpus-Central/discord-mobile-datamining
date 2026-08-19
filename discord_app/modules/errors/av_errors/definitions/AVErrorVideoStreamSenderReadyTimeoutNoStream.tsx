// === Module 17070: AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition ===

// Module 17070 (AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import makeTimeoutKey from "makeTimeoutKey" /* 4776 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeoutNoStream.tsx");

export const AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((item, index) => {
      ({ userId, videoStreamId } = item);
      let tmp = id.getId() === userId;
      if (tmp) {
        tmp = null == videoStreamId;
      }
      return tmp;
    });
    return found.map((item, index) => {
      const merged = Object.assign(item);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};