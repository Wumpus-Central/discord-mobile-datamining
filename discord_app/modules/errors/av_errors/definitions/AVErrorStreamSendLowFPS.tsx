// === Module 18035: AVErrorStreamSendLowFPS ===

// Module 18035 (AVErrorStreamSendLowFPS)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4942 */;
import AVError from "AVError" /* 9095 */;
import StreamQualityUtils from "StreamQualityUtils" /* 9102 */;
import AVErrorContext from "AVErrorContext" /* 18029 */;
import AVErrorUtils from "AVErrorUtils" /* 18032 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
let closure_6 = 20 * DurationsDefault.Millis.SECOND;
const obj = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === ApplicationStreamingStore.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const obj7 = StreamKeyUtils;
          const encodeStreamKeyResult = obj7.encodeStreamKey(currentUserActiveStream);
          const rTCConnection = StreamRTCConnectionStore.getRTCConnection(encodeStreamKeyResult);
          if (null == rTCConnection) {
            return null;
          } else {
            const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
            if (null == mediaEngineConnectionId) {
              return null;
            } else {
              const lastNonZeroRemoteVideoSinkWantsTime = StreamRTCConnectionStore.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                const getParticipant = ChannelRTCStore.getParticipant;
                const channelId = currentUserActiveStream.channelId;
                const tmp12Result = StreamKeyUtils;
                const participant = getParticipant(channelId, tmp12Result.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const tmp12Result7 = AVErrorUtils;
                  const accumulatedStatsWithMinDatapoints = tmp12Result7.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const tmp12Result8 = StreamQualityUtils;
                    const maxQuality = tmp12Result8.getMaxQuality(participant);
                    let tmp10 = null;
                    if (null != maxQuality) {
                      let tmp6;
                      const frameRate = accumulatedStatsWithMinDatapoints.short.frameRate;
                      const tmp12Result9 = AVErrorUtils;
                      if (frameRate < tmp12Result9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        const obj2 = { type: AVError.AVError.STREAM_SEND_LOW_FPS };
                        const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
                        AVErrorContext;
                        const tmp12Result11 = StreamKeyUtils;
                        const merged = Object.assign(getStreamErrorContext(tmp12Result11.encodeStreamKey(currentUserActiveStream)));
                        const items = [obj2];
                        tmp6 = items;
                      } else {
                        const frameRate2 = accumulatedStatsWithMinDatapoints.long.frameRate;
                        AVErrorUtils;
                        tmp6 = null;
                      }
                      tmp10 = tmp6;
                    }
                    return tmp10;
                  }
                }
              } else {
                return null;
              }
            }
          }
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = obj;