// discord_app/modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx
import isDiscordFrontendDevelopment from "../../../../utils/GlobalUtils.tsx";
import initialize from "../../../../stores/StreamRTCConnectionStore.tsx";
import { RTCConnectionQuality } from "../../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((item, index) => {
      let tmp = null;
      if (quality.getQuality(item) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9668).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17055).getStreamErrorContext(item));
        tmp = obj;
        const obj2 = callback(17055);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};