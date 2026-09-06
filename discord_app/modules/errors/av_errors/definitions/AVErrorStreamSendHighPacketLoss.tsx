// === Module 17839: AVErrorStreamSendHighPacketLoss ===

// Module 17839 (AVErrorStreamSendHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;

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
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        let tmp8Result = tmp8(17837);
        const accumulatedStatsWithMinDatapoints = tmp8Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            obj = { type: tmp8(9110).AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            tmp8Result = tmp8(17834);
            const merged = Object.assign(tmp8Result.getStreamErrorContext(tmp8(4612).encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const tmp3 = items;
            const tmp8Result1 = tmp8(4612);
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