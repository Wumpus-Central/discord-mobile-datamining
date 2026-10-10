// === Module 18599: AVErrorStreamViewLowFPS ===

// Module 18599 (AVErrorStreamViewLowFPS)
import StreamQualityUtils from "StreamQualityUtils" /* 5270 */;
import AVError from "AVError" /* 5289 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import AVErrorContext from "AVErrorContext" /* 18597 */;
import AVErrorUtils from "AVErrorUtils" /* 18600 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7428 */;

require = fn;
const ApplicationStreamStates = fn(1085).ApplicationStreamStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        rTCConnection = rTCConnection.getRTCConnection(StreamKeyUtils.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else {
          if (ownerId.ownerId !== id.getId()) {
            if (ownerId.state !== constants.PAUSED) {
              const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return arr;
              } else {
                participant = participant.getParticipant(ownerId.channelId, StreamKeyUtils.encodeStreamKey(ownerId));
                if (null == participant) {
                  return arr;
                } else {
                  const maxQuality = StreamQualityUtils.getMaxQuality(participant);
                  if (null != maxQuality) {
                    if (accumulatedStatsWithMinDatapoints.short.frameRate < tmpResult9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      const obj2 = { type: AVError.AVError.STREAM_VIEW_LOW_FPS };
                      const tmpResult10 = AVErrorContext;
                      const merged = Object.assign(tmpResult10.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(ownerId)));
                      arr = arr.push(obj2);
                      const tmpResult11 = StreamKeyUtils;
                    } else {
                      AVErrorUtils;
                    }
                    tmpResult9 = AVErrorUtils;
                  }
                  return arr;
                }
                const tmpResult7 = StreamKeyUtils;
              }
              const tmpResult = AVErrorUtils;
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