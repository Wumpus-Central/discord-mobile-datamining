// === Module 20385: AVErrorStreamBadNetworkQuality ===

// Module 20385 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import AVError from "AVError" /* 6035 */;
import AVErrorContext from "AVErrorContext" /* 20378 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 8404 */;

require = fn;
const RTCConnectionQuality = fn(1071).RTCConnectionQuality;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((item) => {
      let tmp = null;
      if (quality.getQuality(item) === constants.BAD) {
        const obj = { type: AVError.AVError.STREAM_BAD_NETWORK_QUALITY };
        const merged = Object.assign(AVErrorContext.getStreamErrorContext(item));
        tmp = obj;
      }
      return tmp;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};