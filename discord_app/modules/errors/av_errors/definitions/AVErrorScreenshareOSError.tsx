// === Module 17066: AVErrorScreenshareOSErrorDefinition ===

// Module 17066 (AVErrorScreenshareOSErrorDefinition)
import obj132 from "obj132" /* 2 */;
import closure_2 from "module_4294963475" /* 4294963475 */;

const result = obj132.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((item, index) => null != item.errorCode);
    return found.map((item, index) => {
      const obj = { type: callback(9668).AVError.SCREENSHARE_OS_ERROR, errorMessage: null };
      if (obj2.isMac()) {
        if (str === closure_2) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj[1] = combined;
        callback(17055);
        const tmpResult = callback(4531);
        const merged = Object.assign(tmpResult.getStreamErrorContext(tmpResult.encodeStreamKey(item)));
        return obj;
      }
      combined = str.toString();
      obj2 = callback(500);
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};