// discord_app/modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx
import AVError from "../AVError.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import VideoStreamStore from "../../../../stores/VideoStreamStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = {
  getActiveErrors() {
    let id;
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      let userId;
      let videoStreamId;
      ({ userId, videoStreamId } = item);
      const tmp = id.getId() !== userId && null != videoStreamId;
      return tmp;
    });
    return found.map((item) => {
      const obj = { type: AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT };
      const merged = Object.assign(item);
      return obj;
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  },
};
const result = size.fileFinishedImporting(
  "modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx",
);

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = obj;
