// === Module 17661: AVErrorStreamBadNetworkQualityDefinition ===

// Module 17661 (AVErrorStreamBadNetworkQualityDefinition)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1470 */;
import closure_2 from "initialize" /* 4568 */;
import { RTCConnectionQuality } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9578).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17654).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17654);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};