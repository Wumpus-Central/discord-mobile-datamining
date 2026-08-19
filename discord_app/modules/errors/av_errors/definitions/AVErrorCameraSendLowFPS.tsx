// === Module 17072: AVErrorCameraSendLowFPSDefinition ===

// Module 17072 (AVErrorCameraSendLowFPSDefinition)
import obj132Default from "obj132" /* 687 */;
import mapped from "mapped" /* 9668 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17055 */;
import getReportInboundErrors from "getReportInboundErrors" /* 17058 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;

require = fn;
let closure_5 = 20 * obj132Default.Millis.SECOND;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

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
          const accumulatedStatsWithMinDatapoints = getReportInboundErrors.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, id.getId());
          let tmp7 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              obj = { type: null, userId: null };
              obj[0] = mapped.AVError.CAMERA_SEND_LOW_FPS;
              obj[1] = id.getId();
              const merged = Object.assign(getVoiceChannelErrorContext.getVoiceChannelErrorContext());
              const items = [obj];
              const tmp4Result = getVoiceChannelErrorContext;
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