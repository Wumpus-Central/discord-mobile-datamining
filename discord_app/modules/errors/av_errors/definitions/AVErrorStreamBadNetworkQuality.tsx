// === Module 18051: AVErrorStreamBadNetworkQuality ===

// Module 18051 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AVError from "AVError" /* 9253 */;
import AVErrorContext from "AVErrorContext" /* 18044 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4677 */;

require = fn;
const RTCConnectionQuality = fn(1074).RTCConnectionQuality;
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