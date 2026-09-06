// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import AVError from "../AVError.tsx";
import AVErrorContext from "../AVErrorContext.tsx";
import AVErrorUtils from "../AVErrorUtils.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import StreamRTCConnectionStore from "../../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    let obj = ApplicationStreamingStore;
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === obj.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(
        StreamKeyUtils.encodeStreamKey(currentUserActiveStream),
      );
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        let tmp8Result = AVErrorUtils;
        const accumulatedStatsWithMinDatapoints = tmp8Result.getAccumulatedStatsWithMinDatapoints(
          mediaEngineConnectionId,
          currentUserActiveStream.ownerId,
        );
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            obj = { type: AVError.AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            tmp8Result = AVErrorContext;
            const merged = Object.assign(
              tmp8Result.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)),
            );
            const items = [obj];
            const tmp3 = items;
            const tmp8Result1 = StreamKeyUtils;
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  },
};
