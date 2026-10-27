// === Module 19441: AVErrorStreamSendHighPacketLoss ===

// Module 19441 (AVErrorStreamSendHighPacketLoss)
import AVError from "AVError" /* 5898 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6646 */;
import AVErrorContext from "AVErrorContext" /* 19436 */;
import AVErrorUtils from "AVErrorUtils" /* 19439 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6643 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7815 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === ApplicationStreamingStore.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            const obj2 = { type: AVError.AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const tmp8Result3 = AVErrorContext;
            const merged = Object.assign(tmp8Result3.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)));
            const items = [obj2];
            const tmp3 = items;
            const tmp8Result4 = StreamKeyUtils;
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};