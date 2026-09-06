// discord_app/modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx
import AVError from "../AVError.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import VideoStreamStore from "../../../../stores/VideoStreamStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx",
);

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      ({ userId, videoStreamId } = item);
      let tmp = id.getId() !== userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((item) => {
      const merged = Object.assign(item);
      return { type: AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  },
};
