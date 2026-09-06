// === Module 17836: AVErrorStreamViewLowFPS ===

// Module 17836 (AVErrorStreamViewLowFPS)
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import StreamQualityUtils from "StreamQualityUtils" /* 9109 */;
import AVError from "AVError" /* 9110 */;
import AVErrorContext from "AVErrorContext" /* 17834 */;
import AVErrorUtils from "AVErrorUtils" /* 17837 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;

require = fn;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = StreamKeyUtils;
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
              let tmpResult = AVErrorUtils;
              const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return arr;
              } else {
                tmpResult = StreamKeyUtils;
                participant = participant.getParticipant(ownerId.channelId, tmpResult.encodeStreamKey(ownerId));
                if (null == participant) {
                  return arr;
                } else {
                  const maxQuality = StreamQualityUtils.getMaxQuality(participant);
                  if (null != maxQuality) {
                    if (accumulatedStatsWithMinDatapoints.short.frameRate < tmpResult2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      obj = { type: AVError.AVError.STREAM_VIEW_LOW_FPS };
                      const tmpResult3 = AVErrorContext;
                      const merged = Object.assign(tmpResult3.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(ownerId)));
                      arr = arr.push(obj);
                      const tmpResult4 = StreamKeyUtils;
                    } else {
                      AVErrorUtils;
                    }
                    tmpResult2 = AVErrorUtils;
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