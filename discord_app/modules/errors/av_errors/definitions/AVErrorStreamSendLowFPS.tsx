// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx
import setDefault from "../../../../utils/Durations.tsx";
import isStreamKey from "../../../go_live/utils/StreamKeyUtils.tsx";
import closure_2 from "../../../calls/ChannelRTCStore.tsx";
import closure_3 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_4 from "../../../../stores/StreamRTCConnectionStore.tsx";
import { ApplicationStreamStates } from "../../../../Constants.tsx";

require = arg1;
let closure_6 = 20 * setDefault.Millis.SECOND;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

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
              const lastNonZeroRemoteVideoSinkWantsTime =
                obj9.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                let tmp11Result = tmp11(4544);
                participant = participant.getParticipant(
                  currentUserActiveStream.channelId,
                  tmp11Result.encodeStreamKey(currentUserActiveStream),
                );
                if (null == participant) {
                  return null;
                } else {
                  tmp11Result = tmp11(17677);
                  const accumulatedStatsWithMinDatapoints = tmp11Result.getAccumulatedStatsWithMinDatapoints(
                    mediaEngineConnectionId,
                    currentUserActiveStream.ownerId,
                  );
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = tmp11(9605).getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (
                        accumulatedStatsWithMinDatapoints.short.frameRate <
                        tmp11Result2.getWarningFrameRate(maxQuality.maxFrameRate)
                      ) {
                        obj = { type: null };
                        obj[0] = tmp11(9582).AVError.STREAM_SEND_LOW_FPS;
                        const tmp11Result3 = tmp11(17674);
                        const merged = Object.assign(
                          tmp11Result3.getStreamErrorContext(tmp11(4544).encodeStreamKey(currentUserActiveStream)),
                        );
                        const items = [obj];
                        let tmp6 = items;
                        const tmp11Result4 = tmp11(4544);
                      } else {
                        tmp6 = null;
                        const tmp11Result5 = tmp11(17677);
                      }
                      tmp9 = tmp6;
                      tmp11Result2 = tmp11(17677);
                    }
                    return tmp9;
                  }
                }
              } else {
                return null;
              }
            }
          }
          const obj8 = isStreamKey;
          obj9 = rTCConnection;
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  },
};
