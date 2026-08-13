// discord_app/modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx
import module_4294963475 from "module_4294963475";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: callback(9219).AVError.SCREENSHARE_OS_ERROR, errorMessage: null };
      if (obj2.isMac()) {
        if (str === module_4294963475) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj[1] = combined;
        let tmpResult = tmp(17002);
        tmpResult = tmp(4408);
        const merged = Object.assign(tmpResult.getStreamErrorContext(tmpResult.encodeStreamKey(errorCode)));
        return obj;
      }
      combined = str.toString();
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};