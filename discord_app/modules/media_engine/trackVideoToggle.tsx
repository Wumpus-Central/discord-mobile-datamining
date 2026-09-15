// === Module 13921: trackVideoToggle ===

// Module 13921 (trackVideoToggle)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import VideoHealthManager from "VideoHealthManager" /* 13915 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/media_engine/trackVideoToggle.tsx");

export default function trackVideoToggle(toggled_user_id, video_toggle_reason, is_video_shown) {
  const defaultConfig = VideoHealthManager.VideoHealthManager.defaultConfig;
  const featureEnabled = defaultConfig.featureEnabled;
  ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
  const obj2 = { video_toggle_reason, toggled_user_id, rtc_connection_id: null, media_session_id: null, video_health_manager_window_length: null, video_health_manager_poor_fps_ratio: null, video_health_manager_fps_threshold: null, is_video_shown: null, video_health_manager_backoff_time_seconds: null };
  let tmp;
  if (global != null) {
    tmp = global();
  }
  obj2.rtc_connection_id = tmp;
  let tmp2;
  if (require != null) {
    tmp2 = require();
  }
  obj2.media_session_id = tmp2;
  let tmp3 = null;
  if (featureEnabled) {
    tmp3 = windowLength;
  }
  obj2.video_health_manager_window_length = tmp3;
  let tmp4 = null;
  if (featureEnabled) {
    tmp4 = allowedPoorFpsRatio;
  }
  obj2.video_health_manager_poor_fps_ratio = tmp4;
  let tmp5 = null;
  if (featureEnabled) {
    tmp5 = fpsThreshold;
  }
  obj2.video_health_manager_fps_threshold = tmp5;
  obj2.is_video_shown = is_video_shown;
  let tmp6 = null;
  if (featureEnabled) {
    tmp6 = backoffTimeSec;
  }
  obj2.video_health_manager_backoff_time_seconds = tmp6;
  AnalyticsUtilsDefault.track(AnalyticEvents.VIDEO_TOGGLED, obj2);
};
export function setVideoToggleAnalyticsParams(getRTCConnectionId, getMediaSessionId) {
  global = getRTCConnectionId;
  require = getMediaSessionId;
}