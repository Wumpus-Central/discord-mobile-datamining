// === Module 18050: AVErrorStreamSendLowFPS ===

// Module 18050 (AVErrorStreamSendLowFPS)
import DurationsDefault from "Durations" /* 1091 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4690 */;
import StreamQualityUtils from "StreamQualityUtils" /* 9252 */;
import AVError from "AVError" /* 9253 */;
import AVErrorContext from "AVErrorContext" /* 18044 */;
import AVErrorUtils from "AVErrorUtils" /* 18047 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4654 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4660 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4677 */;

require = fn;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
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