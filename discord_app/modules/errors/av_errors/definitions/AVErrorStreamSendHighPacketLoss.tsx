// === Module 17185: AVErrorStreamSendHighPacketLossDefinition ===

// Module 17185 (AVErrorStreamSendHighPacketLossDefinition)
import isStreamKey from "isStreamKey" /* 4446 */;
import closure_2 from "reset" /* 4402 */;
import closure_3 from "initialize" /* 4468 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    let obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === obj.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      rTCConnection = rTCConnection.getRTCConnection(isStreamKey.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        let tmp8Result = tmp8(17183);
        const accumulatedStatsWithMinDatapoints = tmp8Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            obj = { type: null };
            obj[0] = tmp8(9317).AVError.STREAM_SEND_HIGH_PACKET_LOSS;
            tmp8Result = tmp8(17180);
            const merged = Object.assign(tmp8Result.getStreamErrorContext(tmp8(4446).encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const tmp3 = items;
            const tmp8Result1 = tmp8(4446);
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
      const obj5 = isStreamKey;
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};