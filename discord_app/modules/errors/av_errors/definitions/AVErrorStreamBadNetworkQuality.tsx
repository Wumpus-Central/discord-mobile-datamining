// === Module 20373: AVErrorStreamBadNetworkQuality ===

// Module 20373 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AVError from "AVError" /* 6085 */;
import AVErrorContext from "AVErrorContext" /* 20366 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 8030 */;

require = fn;
const RTCConnectionQuality = fn(1072).RTCConnectionQuality;
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