// discord_app/modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import AVError from "../AVError.tsx";
import AVErrorContext from "../AVErrorContext.tsx";
import AVErrorUtils from "../AVErrorUtils.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";

require = fn;
let closure_5 = 20 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

export const AVErrorCameraSendLowFPSDefinition = {
  getActiveErrors() {
    let obj = RTCConnectionStore;
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null == rTCConnection) {
      return null;
    } else {
      const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      if (null == mediaEngineConnectionId) {
        return null;
      } else if (MediaEngineStore.isVideoEnabled()) {
        const lastNonZeroRemoteVideoSinkWantsTime = obj.getLastNonZeroRemoteVideoSinkWantsTime();
        if (null != lastNonZeroRemoteVideoSinkWantsTime) {
          const _performance = performance;
          if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_5) {
            return null;
          }
        }
        if (rTCConnection.hasActiveRemoteWants()) {
          const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(
            mediaEngineConnectionId,
            AuthenticationStore.getId(),
          );
          let tmp7 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              obj = { type: AVError.AVError.CAMERA_SEND_LOW_FPS, userId: AuthenticationStore.getId() };
              const merged = Object.assign(AVErrorContext.getVoiceChannelErrorContext());
              const items = [obj];
              const tmp4Result = AVErrorContext;
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
