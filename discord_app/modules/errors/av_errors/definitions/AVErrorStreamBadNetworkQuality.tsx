// === Module 19332: AVErrorStreamBadNetworkQuality ===

// Module 19332 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import AVError from "AVError" /* 5895 */;
import AVErrorContext from "AVErrorContext" /* 19325 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7812 */;

require = fn;
const RTCConnectionQuality = fn(1087).RTCConnectionQuality;
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