// discord_app/modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx
import getParticipants from "../../../calls/ChannelRTCStore.tsx";
import reset from "../../../../stores/ApplicationStreamingStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import initialize from "../../../../stores/StreamRTCConnectionStore.tsx";
import { ApplicationStreamStates } from "../../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((acc, item, index) => {
        let obj = callback(table[6]);
        rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(item));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return acc;
        } else {
          if (item.ownerId !== id.getId()) {
            if (item.state !== constants.PAUSED) {
              let tmpResult = callback(table[5]);
              const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, item.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return acc;
              } else {
                tmpResult = callback(table[6]);
                participant = participant.getParticipant(item.channelId, tmpResult.encodeStreamKey(item));
                if (null == participant) {
                  return acc;
                } else {
                  const maxQuality = callback(table[7]).getMaxQuality(participant);
                  if (null != maxQuality) {
                    if (accumulatedStatsWithMinDatapoints.short.frameRate < tmpResult2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      obj = { type: null };
                      obj[0] = callback(table[8]).AVError.STREAM_VIEW_LOW_FPS;
                      const tmpResult3 = callback(table[9]);
                      const merged = Object.assign(tmpResult3.getStreamErrorContext(callback(table[6]).encodeStreamKey(item)));
                      acc.push(obj);
                      const tmpResult4 = callback(table[6]);
                    } else {
                      callback(table[5]);
                    }
                    tmpResult2 = callback(table[5]);
                  }
                  return acc;
                }
              }
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