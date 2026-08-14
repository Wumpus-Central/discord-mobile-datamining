// discord_app/modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx
import initialize from "initialize";
import { RTCConnectionQuality } from "ME";
import { isDiscordFrontendDevelopment } from "../../../../utils/GlobalUtils.tsx";

const require = arg1;
const result = require("mapped").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9233).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17009).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17009);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};