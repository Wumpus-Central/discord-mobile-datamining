// discord_app/modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";

const ApplicationStreamStates = ME.ApplicationStreamStates;
const result = obj132.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

export const AVErrorStreamFailedToStartDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((item, index) => {
      let tmp = item.state === constants.FAILED;
      if (tmp) {
        tmp = null == item.errorCode;
      }
      return tmp;
    });
    return found.map((item, index) => {
      const obj = { type: callback(9668).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(17055);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4531).encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};