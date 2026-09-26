// === Module 17669: AVErrorScreenshareOSError ===

// Module 17669 (AVErrorScreenshareOSError)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import AVError from "AVError" /* 8875 */;
import AVErrorContext from "AVErrorContext" /* 17658 */;
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
        const tmpResult = AVErrorContext;
        const merged = Object.assign(tmpResult.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(errorCode)));
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