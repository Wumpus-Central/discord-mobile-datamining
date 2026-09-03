// discord_app/modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx
import setDefault from "../../../../utils/Durations.tsx";
import getReportInboundErrors from "../AVErrorUtils.tsx";
import closure_2 from "../../../../stores/AuthenticationStore.tsx";
import closure_3 from "../../../../stores/MediaEngineStore.tsx";
import closure_4 from "../../../../stores/RTCConnectionStore.tsx";

require = arg1;
let closure_5 = 20 * setDefault.Millis.SECOND;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

export const AVErrorCameraSendLowFPSDefinition = {
  getActiveErrors() {
    let obj = rTCConnection;
    rTCConnection = rTCConnection.getRTCConnection();
    if (null == rTCConnection) {
      return null;
    } else {
      const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      if (null == mediaEngineConnectionId) {
        return null;
      } else if (videoEnabled.isVideoEnabled()) {
        const lastNonZeroRemoteVideoSinkWantsTime = obj.getLastNonZeroRemoteVideoSinkWantsTime();
        if (null != lastNonZeroRemoteVideoSinkWantsTime) {
          const _performance = performance;
          if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_5) {
            return null;
          }
        }
        if (rTCConnection.hasActiveRemoteWants()) {
          const accumulatedStatsWithMinDatapoints = getReportInboundErrors.getAccumulatedStatsWithMinDatapoints(
            mediaEngineConnectionId,
            id.getId(),
          );
          let tmp7 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              obj = { type: null, userId: null };
              obj[0] = tmp4(9582).AVError.CAMERA_SEND_LOW_FPS;
              obj[1] = id.getId();
              const merged = Object.assign(tmp4(17674).getVoiceChannelErrorContext());
              const items = [obj];
              const tmp4Result = tmp4(17674);
              const tmp8 = items;
            }
            tmp7 = tmp8;
          }
          return tmp7;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId;
  },
};
