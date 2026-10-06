// discord_app/modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx
import Constants from "../../../../Constants.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamQualityUtils from "../../../../utils/StreamQualityUtils.tsx";
import AVError from "../AVError.tsx";
import AVErrorContext from "../AVErrorContext.tsx";
import AVErrorUtils from "../AVErrorUtils.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import StreamRTCConnectionStore from "../../../../stores/StreamRTCConnectionStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let getParticipant, getRTCConnection;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
let obj = {
  getActiveErrors() {
    let id;
    let obj = AVErrorUtils;
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((acc, ownerId) => {
        getRTCConnection = getRTCConnection.getRTCConnection;
        const obj = StreamKeyUtils;
        const rTCConnection = getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return acc;
        } else {
          if (ownerId.ownerId !== id.getId()) {
            if (ownerId.state !== constants.PAUSED) {
              const tmpResult = AVErrorUtils;
              const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(
                mediaEngineConnectionId,
                ownerId.ownerId,
              );
              if (null == accumulatedStatsWithMinDatapoints) {
                return acc;
              } else {
                getParticipant = getParticipant.getParticipant;
                const channelId = ownerId.channelId;
                const tmpResult7 = StreamKeyUtils;
                const participant = getParticipant(channelId, tmpResult7.encodeStreamKey(ownerId));
                if (null == participant) {
                  return acc;
                } else {
                  const tmpResult8 = StreamQualityUtils;
                  const maxQuality = tmpResult8.getMaxQuality(participant);
                  if (null != maxQuality) {
                    const frameRate2 = accumulatedStatsWithMinDatapoints.short.frameRate;
                    const tmpResult9 = AVErrorUtils;
                    if (frameRate2 < tmpResult9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      const push = acc.push;
                      const obj2 = { type: AVError.AVError.STREAM_VIEW_LOW_FPS };
                      const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
                      AVErrorContext;
                      const tmpResult11 = StreamKeyUtils;
                      const merged = Object.assign(getStreamErrorContext(tmpResult11.encodeStreamKey(ownerId)));
                      push(obj2);
                    } else {
                      const frameRate = accumulatedStatsWithMinDatapoints.long.frameRate;
                      AVErrorUtils;
                    }
                  }
                  return acc;
                }
              }
            }
          }
          return acc;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  },
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = obj;
