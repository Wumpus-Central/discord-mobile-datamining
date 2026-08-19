// === Module 17060: AVErrorStreamSendHighPacketLossDefinition ===

// Module 17060 (AVErrorStreamSendHighPacketLossDefinition)
import isStreamKey from "isStreamKey" /* 4531 */;
import mapped from "mapped" /* 9668 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17055 */;
import getReportInboundErrors from "getReportInboundErrors" /* 17058 */;
import reset from "reset" /* 4652 */;
import initialize from "initialize" /* 4558 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

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
        let tmp8Result = getReportInboundErrors;
        const accumulatedStatsWithMinDatapoints = tmp8Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            obj = { type: null };
            obj[0] = mapped.AVError.STREAM_SEND_HIGH_PACKET_LOSS;
            tmp8Result = getVoiceChannelErrorContext;
            const merged = Object.assign(tmp8Result.getStreamErrorContext(isStreamKey.encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const tmp3 = items;
            const tmp8Result1 = isStreamKey;
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