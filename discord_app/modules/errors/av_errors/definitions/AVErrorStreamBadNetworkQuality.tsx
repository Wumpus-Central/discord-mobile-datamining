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
        obj[0] = callback(9063).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(16775).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(16775);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};