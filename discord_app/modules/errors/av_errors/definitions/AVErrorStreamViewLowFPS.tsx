// === Module 17351: AVErrorStreamViewLowFPSDefinition ===

// Module 17351 (AVErrorStreamViewLowFPSDefinition)
import closure_2 from "getParticipants" /* 4462 */;
import closure_3 from "reset" /* 4468 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "initialize" /* 4534 */;
import { ApplicationStreamStates } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = callback(table[6]);
        rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else {
          if (ownerId.ownerId !== id.getId()) {
            if (ownerId.state !== constants.PAUSED) {
              let tmpResult = tmp(tmp2[5]);
              const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return arr;
              } else {
                tmpResult = tmp(tmp2[6]);
                participant = participant.getParticipant(ownerId.channelId, tmpResult.encodeStreamKey(ownerId));
                if (null == participant) {
                  return arr;
                } else {
                  const maxQuality = tmp(tmp2[7]).getMaxQuality(participant);
                  if (null != maxQuality) {
                    if (accumulatedStatsWithMinDatapoints.short.frameRate < tmpResult2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      obj = { type: null };
                      obj[0] = tmp(tmp2[8]).AVError.STREAM_VIEW_LOW_FPS;
                      const tmpResult3 = tmp(tmp2[9]);
                      const merged = Object.assign(tmpResult3.getStreamErrorContext(tmp(tmp2[6]).encodeStreamKey(ownerId)));
                      arr.push(obj);
                      const tmpResult4 = tmp(tmp2[6]);
                    } else {
                      const tmpResult5 = tmp(tmp2[5]);
                    }
                    tmpResult2 = tmp(tmp2[5]);
                  }
                  return arr;
                }
              }
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