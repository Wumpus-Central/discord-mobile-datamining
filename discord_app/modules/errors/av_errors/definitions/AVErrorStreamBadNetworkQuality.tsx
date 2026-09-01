// discord_app/modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx
import isDiscordFrontendDevelopment from "../../../../utils/GlobalUtils.tsx";
import closure_2 from "../../../../stores/StreamRTCConnectionStore.tsx";
import { RTCConnectionQuality } from "../../../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9565).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17418).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17418);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};