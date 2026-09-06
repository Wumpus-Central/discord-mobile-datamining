// discord_app/modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamQualityUtils from "../../../../utils/StreamQualityUtils.tsx";
import AVError from "../AVError.tsx";
import AVErrorContext from "../AVErrorContext.tsx";
import AVErrorUtils from "../AVErrorUtils.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import StreamRTCConnectionStore from "../../../../stores/StreamRTCConnectionStore.tsx";

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
              const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(
                mediaEngineConnectionId,
                ownerId.ownerId,
              );
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
                    if (
                      accumulatedStatsWithMinDatapoints.short.frameRate <
                      tmpResult2.getWarningFrameRate(maxQuality.maxFrameRate)
                    ) {
                      obj = { type: AVError.AVError.STREAM_VIEW_LOW_FPS };
                      const tmpResult3 = AVErrorContext;
                      const merged = Object.assign(
                        tmpResult3.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(ownerId)),
                      );
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
  },
};
