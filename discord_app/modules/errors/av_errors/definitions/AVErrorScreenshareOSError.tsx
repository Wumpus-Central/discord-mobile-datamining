// === Module 17845: AVErrorScreenshareOSError ===

// Module 17845 (AVErrorScreenshareOSError)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import AVError from "AVError" /* 9110 */;
import AVErrorContext from "AVErrorContext" /* 17834 */;
import size from "module_2" /* 2 */;

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
  }
};