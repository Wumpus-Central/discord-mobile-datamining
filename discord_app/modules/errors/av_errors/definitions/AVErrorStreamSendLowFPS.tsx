// === Module 17840: AVErrorStreamSendLowFPS ===

// Module 17840 (AVErrorStreamSendLowFPS)
import DurationsDefault from "Durations" /* 1090 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import StreamQualityUtils from "StreamQualityUtils" /* 9109 */;
import AVError from "AVError" /* 9110 */;
import AVErrorContext from "AVErrorContext" /* 17834 */;
import AVErrorUtils from "AVErrorUtils" /* 17837 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;

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
              const lastNonZeroRemoteVideoSinkWantsTime = StreamRTCConnectionStore.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                let tmp11Result = StreamKeyUtils;
                const participant = ChannelRTCStore.getParticipant(currentUserActiveStream.channelId, tmp11Result.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  tmp11Result = AVErrorUtils;
                  const accumulatedStatsWithMinDatapoints = tmp11Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = StreamQualityUtils.getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        obj = { type: AVError.AVError.STREAM_SEND_LOW_FPS };
                        const tmp11Result3 = AVErrorContext;
                        const merged = Object.assign(tmp11Result3.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)));
                        const items = [obj];
                        let tmp6 = items;
                        const tmp11Result4 = StreamKeyUtils;
                      } else {
                        AVErrorUtils;
                        tmp6 = null;
                      }
                      tmp9 = tmp6;
                      tmp11Result2 = AVErrorUtils;
                    }
                    return tmp9;
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