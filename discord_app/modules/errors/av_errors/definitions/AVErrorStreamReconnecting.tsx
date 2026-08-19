// === Module 17065: AVErrorStreamReconnectingDefinition ===

// Module 17065 (AVErrorStreamReconnectingDefinition)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const ApplicationStreamStates = ME.ApplicationStreamStates;
const result = obj132.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((item, index) => item.state === constants.RECONNECTING);
    return found.map((item, index) => {
      const obj = { type: callback(9668).AVError.STREAM_RECONNECTING };
      const obj2 = callback(17055);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4531).encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};