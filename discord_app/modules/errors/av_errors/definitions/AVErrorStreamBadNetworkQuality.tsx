// === Module 19928: AVErrorStreamBadNetworkQuality ===

// Module 19928 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1385 */;
import AVError from "AVError" /* 5935 */;
import AVErrorContext from "AVErrorContext" /* 19921 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7872 */;

require = fn;
const RTCConnectionQuality = fn(1084).RTCConnectionQuality;
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