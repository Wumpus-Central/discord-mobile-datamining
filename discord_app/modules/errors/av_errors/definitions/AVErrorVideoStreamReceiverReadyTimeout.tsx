// === Module 17069: AVErrorVideoStreamReceiverReadyTimeoutDefinition ===

// Module 17069 (AVErrorVideoStreamReceiverReadyTimeoutDefinition)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import makeTimeoutKey from "makeTimeoutKey" /* 4776 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((item, index) => {
      ({ userId, videoStreamId } = item);
      let tmp = id.getId() !== userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((item, index) => {
      const merged = Object.assign(item);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};