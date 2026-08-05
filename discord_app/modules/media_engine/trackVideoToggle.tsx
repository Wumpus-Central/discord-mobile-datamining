// discord_app/modules/media_engine/trackVideoToggle.tsx
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/media_engine/trackVideoToggle.tsx");

export default function trackVideoToggle(toggled_user_id, video_toggle_reason) {
  let allowedPoorFpsRatio;
  let backoffTimeSec;
  let fpsThreshold;
  let windowLength;
  const defaultConfig = require(12995) /* calculateFps */.VideoHealthManager.defaultConfig;
  const featureEnabled = defaultConfig.featureEnabled;
  ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
  let obj = importDefault(698);
  obj = { video_toggle_reason, toggled_user_id, rtc_connection_id: null, media_session_id: null, video_health_manager_window_length: null, video_health_manager_poor_fps_ratio: null, video_health_manager_fps_threshold: null, is_video_shown: null, video_health_manager_backoff_time_seconds: null };
  let tmp;
  if (callback != null) {
    tmp = callback();
  }
  obj[2] = tmp;
  let tmp2;
  if (callback2 != null) {
    tmp2 = callback2();
  }
  obj[3] = tmp2;
  let tmp3 = null;
  if (featureEnabled) {
    tmp3 = windowLength;
  }
  obj[4] = tmp3;
  let tmp4 = null;
  if (featureEnabled) {
    tmp4 = allowedPoorFpsRatio;
  }
  obj[5] = tmp4;
  let tmp5 = null;
  if (featureEnabled) {
    tmp5 = fpsThreshold;
  }
  obj[6] = tmp5;
  obj[7] = arg2;
  let tmp6 = null;
  if (featureEnabled) {
    tmp6 = backoffTimeSec;
  }
  obj[8] = tmp6;
  obj.track(AnalyticEvents.VIDEO_TOGGLED, obj);
};
export function setVideoToggleAnalyticsParams(getRTCConnectionId, getMediaSessionId) {
  let closure_3 = getRTCConnectionId;
  let closure_4 = getMediaSessionId;
}