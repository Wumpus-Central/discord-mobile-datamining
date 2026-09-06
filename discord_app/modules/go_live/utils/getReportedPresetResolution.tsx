// === Module 4697: getReportedPresetResolution ===

// Module 4697 (getReportedPresetResolution)
import getFrontierTuningConfigIfEligibleDefault from "getFrontierTuningConfigIfEligible" /* 4698 */;
import UserStore from "UserStore" /* 1371 */;

const StreamSettingsConstants = fn(4607);
({ ApplicationStreamFPS: c3, ApplicationStreamResolutions: closure_4 } = StreamSettingsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/getReportedPresetResolution.tsx");

export default function getReportedPresetResolution(RTCConnection, guildId, arg2, arg3) {
  if (arg2 === RESOLUTION_1080.RESOLUTION_1080) {
    if (arg3 === FPS_30.FPS_30) {
      const tmp8Result = getFrontierTuningConfigIfEligibleDefault(RTCConnection, UserStore.getCurrentUser(), guildId);
      let maskReportedQuality;
      if (tmp8Result != null) {
        maskReportedQuality = tmp8Result.maskReportedQuality;
      }
      let RESOLUTION_720 = arg2;
      if (true === maskReportedQuality) {
        RESOLUTION_720 = tmp.RESOLUTION_720;
      }
      return RESOLUTION_720;
    }
  }
  return arg2;
};