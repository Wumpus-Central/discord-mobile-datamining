// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx
import isStreamKey from "../../../go_live/utils/StreamKeyUtils.tsx";
import mapped from "../AVError.tsx";
import getVoiceChannelErrorContext from "../AVErrorContext.tsx";
import getReportInboundErrors from "../AVErrorUtils.tsx";
import reset from "../../../../stores/ApplicationStreamingStore.tsx";
import initialize from "../../../../stores/StreamRTCConnectionStore.tsx";

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