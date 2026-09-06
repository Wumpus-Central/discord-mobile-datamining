// discord_app/modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import AVError from "../AVError.tsx";
import AVErrorContext from "../AVErrorContext.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = BigInt(-3821);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: AVError.AVError.SCREENSHARE_OS_ERROR, errorMessage: null };
      if (obj2.isMac()) {
        if (str === closure_1_2) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj.errorMessage = combined;
        const tmpResult = StreamKeyUtils;
        const merged = Object.assign(tmpResult.getStreamErrorContext(tmpResult.encodeStreamKey(errorCode)));
        return obj;
      }
      combined = str.toString();
      obj2 = PlatformUtils;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  },
};
