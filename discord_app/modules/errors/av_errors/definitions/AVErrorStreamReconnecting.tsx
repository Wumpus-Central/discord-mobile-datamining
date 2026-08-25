// === Module 17190: AVErrorStreamReconnectingDefinition ===

// Module 17190 (AVErrorStreamReconnectingDefinition)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const ApplicationStreamStates = ME.ApplicationStreamStates;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9317).AVError.STREAM_RECONNECTING };
      const obj2 = callback(17180);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4446).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};