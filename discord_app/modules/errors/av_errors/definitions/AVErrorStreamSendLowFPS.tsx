// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx
import obj132Default from "../../../../utils/Durations.tsx";
import isStreamKey from "../../../go_live/utils/StreamKeyUtils.tsx";
import isPremiumResolution from "../../../../utils/StreamQualityUtils.tsx";
import mapped from "../AVError.tsx";
import getVoiceChannelErrorContext from "../AVErrorContext.tsx";
import getReportInboundErrors from "../AVErrorUtils.tsx";
import getParticipants from "../../../calls/ChannelRTCStore.tsx";
import reset from "../../../../stores/ApplicationStreamingStore.tsx";
import initialize from "../../../../stores/StreamRTCConnectionStore.tsx";
import { ApplicationStreamStates } from "../../../../Constants.tsx";

require = fn;
let closure_6 = 20 * obj132Default.Millis.SECOND;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = {
  getActiveErrors() {
    let obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === obj.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const encodeStreamKeyResult = isStreamKey.encodeStreamKey(currentUserActiveStream);
          rTCConnection = rTCConnection.getRTCConnection(encodeStreamKeyResult);
          if (null == rTCConnection) {
            return null;
          } else {
            const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
            if (null == mediaEngineConnectionId) {
              return null;
            } else {
              const lastNonZeroRemoteVideoSinkWantsTime = obj9.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                let tmp11Result = isStreamKey;
                participant = participant.getParticipant(currentUserActiveStream.channelId, tmp11Result.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  tmp11Result = getReportInboundErrors;
                  const accumulatedStatsWithMinDatapoints = tmp11Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = isPremiumResolution.getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        obj = { type: null };
                        obj[0] = mapped.AVError.STREAM_SEND_LOW_FPS;
                        const tmp11Result3 = getVoiceChannelErrorContext;
                        const merged = Object.assign(tmp11Result3.getStreamErrorContext(isStreamKey.encodeStreamKey(currentUserActiveStream)));
                        const items = [obj];
                        let tmp6 = items;
                        const tmp11Result4 = isStreamKey;
                      } else {
                        getReportInboundErrors;
                        tmp6 = null;
                      }
                      tmp9 = tmp6;
                      tmp11Result2 = getReportInboundErrors;
                    }
                    return tmp9;
                  }
                }
              } else {
                return null;
              }
            }
          }
          obj9 = rTCConnection;
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};