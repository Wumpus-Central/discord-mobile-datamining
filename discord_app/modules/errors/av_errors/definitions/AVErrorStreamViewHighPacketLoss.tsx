// === Module 17838: AVErrorStreamViewHighPacketLoss ===

// Module 17838 (AVErrorStreamViewHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import AVError from "AVError" /* 9110 */;
import AVErrorContext from "AVErrorContext" /* 17834 */;
import AVErrorUtils from "AVErrorUtils" /* 17837 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = StreamKeyUtils;
        rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else if (ownerId.ownerId === id.getId()) {
          return arr;
        } else {
          let tmpResult = AVErrorUtils;
          const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
              obj = { type: AVError.AVError.STREAM_VIEW_HIGH_PACKET_LOSS };
              tmpResult = AVErrorContext;
              const merged = Object.assign(tmpResult.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(ownerId)));
              arr = arr.push(obj);
              const tmpResult1 = StreamKeyUtils;
            }
          }
          return arr;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};