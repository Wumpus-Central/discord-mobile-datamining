// === Module 19203: AVErrorStreamReconnecting ===

// Module 19203 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1087 */;
import AVError from "AVError" /* 5877 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6624 */;
import AVErrorContext from "AVErrorContext" /* 19193 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_RECONNECTING };
      const obj2 = AVErrorContext;
      const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};