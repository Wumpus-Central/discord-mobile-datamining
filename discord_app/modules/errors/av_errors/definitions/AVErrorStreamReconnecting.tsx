// discord_app/modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";

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