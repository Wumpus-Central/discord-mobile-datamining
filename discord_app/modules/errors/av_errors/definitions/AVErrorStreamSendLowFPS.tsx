// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import StreamRTCConnectionStore from "../../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
let closure_6 = 20 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = {
  getActiveErrors() {
    let obj = ApplicationStreamingStore;
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === obj.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(currentUserActiveStream);
          const rTCConnection = StreamRTCConnectionStore.getRTCConnection(encodeStreamKeyResult);
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
                let tmp11Result = tmp11(4612);
                const participant = ChannelRTCStore.getParticipant(
                  currentUserActiveStream.channelId,
                  tmp11Result.encodeStreamKey(currentUserActiveStream),
                );
                if (null == participant) {
                  return null;
                } else {
                  tmp11Result = tmp11(17837);
                  const accumulatedStatsWithMinDatapoints = tmp11Result.getAccumulatedStatsWithMinDatapoints(
                    mediaEngineConnectionId,
                    currentUserActiveStream.ownerId,
                  );
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = tmp11(9109).getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (
                        accumulatedStatsWithMinDatapoints.short.frameRate <
                        tmp11Result2.getWarningFrameRate(maxQuality.maxFrameRate)
                      ) {
                        obj = { type: tmp11(9110).AVError.STREAM_SEND_LOW_FPS };
                        const tmp11Result3 = tmp11(17834);
                        const merged = Object.assign(
                          tmp11Result3.getStreamErrorContext(tmp11(4612).encodeStreamKey(currentUserActiveStream)),
                        );
                        const items = [obj];
                        let tmp6 = items;
                        const tmp11Result4 = tmp11(4612);
                      } else {
                        tmp6 = null;
                        const tmp11Result5 = tmp11(17837);
                      }
                      tmp9 = tmp6;
                      tmp11Result2 = tmp11(17837);
                    }
                    return tmp9;
                  }
                }
              } else {
                return null;
              }
            }
          }
          obj9 = StreamRTCConnectionStore;
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  },
};
