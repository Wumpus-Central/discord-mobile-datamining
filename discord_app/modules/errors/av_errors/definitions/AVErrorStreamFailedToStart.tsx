// === Module 17683: AVErrorStreamFailedToStartDefinition ===

// Module 17683 (AVErrorStreamFailedToStartDefinition)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const ApplicationStreamStates = ME.ApplicationStreamStates;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

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
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9582).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(17674);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4544).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};