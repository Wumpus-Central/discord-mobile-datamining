// === Module 18995: AVErrorStreamSendLowFPS ===

// Module 18995 (AVErrorStreamSendLowFPS)
import DurationsDefault from "Durations" /* 1104 */;
import StreamQualityUtils from "StreamQualityUtils" /* 5333 */;
import AVError from "AVError" /* 5352 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6119 */;
import AVErrorContext from "AVErrorContext" /* 18989 */;
import AVErrorUtils from "AVErrorUtils" /* 18992 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6255 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6116 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7648 */;

require = fn;
const ApplicationStreamStates = fn(1087).ApplicationStreamStates;
let closure_6 = 20 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === ApplicationStreamingStore.getViewerIds(currentUserActiveStream).length) {
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
              const lastNonZeroRemoteVideoSinkWantsTime = StreamRTCConnectionStore.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                const participant = ChannelRTCStore.getParticipant(currentUserActiveStream.channelId, StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = StreamQualityUtils.getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        const obj2 = { type: AVError.AVError.STREAM_SEND_LOW_FPS };
                        const tmp11Result10 = AVErrorContext;
                        const merged = Object.assign(tmp11Result10.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)));
                        const items = [obj2];
                        let tmp6 = items;
                        const tmp11Result11 = StreamKeyUtils;
                      } else {
                        AVErrorUtils;
                        tmp6 = null;
                      }
                      tmp9 = tmp6;
                      tmp11Result9 = AVErrorUtils;
                    }
                    return tmp9;
                  }
                  const tmp11Result7 = AVErrorUtils;
                }
                const tmp11Result = StreamKeyUtils;
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