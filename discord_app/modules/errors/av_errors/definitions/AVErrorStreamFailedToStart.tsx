// discord_app/modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";

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
      const obj = { type: callback(9504).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(17349);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4512).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};