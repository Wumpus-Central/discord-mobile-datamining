// === Module 17059: AVErrorStreamViewHighPacketLossDefinition ===

// Module 17059 (AVErrorStreamViewHighPacketLossDefinition)
import reset from "reset" /* 4652 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import initialize from "initialize" /* 4558 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((acc, item, index) => {
        let obj = callback(table[4]);
        rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(item));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return acc;
        } else if (item.ownerId === id.getId()) {
          return acc;
        } else {
          let tmpResult = callback(table[3]);
          const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, item.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
              obj = { type: null };
              obj[0] = callback(table[5]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS;
              tmpResult = callback(table[6]);
              const merged = Object.assign(tmpResult.getStreamErrorContext(callback(table[4]).encodeStreamKey(item)));
              acc.push(obj);
              const tmpResult1 = callback(table[4]);
            }
          }
          return acc;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};