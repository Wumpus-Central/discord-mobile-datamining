// === Module 18285: AVErrorStreamViewHighPacketLoss ===

// Module 18285 (AVErrorStreamViewHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4808 */;
import AVError from "AVError" /* 9685 */;
import AVErrorContext from "AVErrorContext" /* 18281 */;
import AVErrorUtils from "AVErrorUtils" /* 18284 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4795 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        rTCConnection = rTCConnection.getRTCConnection(StreamKeyUtils.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else if (ownerId.ownerId === id.getId()) {
          return arr;
        } else {
          const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
              const obj2 = { type: AVError.AVError.STREAM_VIEW_HIGH_PACKET_LOSS };
              const tmpResult3 = AVErrorContext;
              const merged = Object.assign(tmpResult3.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(ownerId)));
              arr = arr.push(obj2);
              const tmpResult4 = StreamKeyUtils;
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