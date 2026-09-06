// === Module 17843: AVErrorStreamFailedToStart ===

// Module 17843 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1074 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import AVError from "AVError" /* 9110 */;
import AVErrorContext from "AVErrorContext" /* 17834 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

export const AVErrorStreamFailedToStartDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => {
      let tmp = state.state === constants.FAILED;
      if (tmp) {
        tmp = null == state.errorCode;
      }
      return tmp;
    });
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_FAILED_TO_START };
      const obj2 = AVErrorContext;
      const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};