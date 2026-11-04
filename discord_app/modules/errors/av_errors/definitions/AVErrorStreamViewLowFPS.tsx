// === Module 20332: AVErrorStreamViewLowFPS ===

// Module 20332 (AVErrorStreamViewLowFPS)
import StreamQualityUtils from "StreamQualityUtils" /* 6077 */;
import AVError from "AVError" /* 6082 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6852 */;
import AVErrorContext from "AVErrorContext" /* 20330 */;
import AVErrorUtils from "AVErrorUtils" /* 20333 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6849 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 8025 */;

require = fn;
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
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