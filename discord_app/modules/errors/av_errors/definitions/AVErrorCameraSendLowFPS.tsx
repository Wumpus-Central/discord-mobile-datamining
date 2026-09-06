// === Module 17851: AVErrorCameraSendLowFPS ===

// Module 17851 (AVErrorCameraSendLowFPS)
import DurationsDefault from "Durations" /* 1090 */;
import AVErrorUtils from "AVErrorUtils" /* 17837 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

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
          const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, AuthenticationStore.getId());
          let tmp7 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              obj = { type: tmp4(9110).AVError.CAMERA_SEND_LOW_FPS, userId: AuthenticationStore.getId() };
              const merged = Object.assign(tmp4(17834).getVoiceChannelErrorContext());
              const items = [obj];
              const tmp4Result = tmp4(17834);
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
  }
};