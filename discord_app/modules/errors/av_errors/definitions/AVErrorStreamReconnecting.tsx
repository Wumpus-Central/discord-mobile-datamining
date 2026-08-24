// discord_app/modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";

const ApplicationStreamStates = ME.ApplicationStreamStates;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9707).AVError.STREAM_RECONNECTING };
      const obj2 = callback(17148);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4536).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};