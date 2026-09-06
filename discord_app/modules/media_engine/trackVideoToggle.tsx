// discord_app/modules/media_engine/trackVideoToggle.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import VideoHealthManager from "../../lib/VideoHealthManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/media_engine/trackVideoToggle.tsx");

export default function trackVideoToggle(toggled_user_id, video_toggle_reason, is_video_shown) {
  const defaultConfig = VideoHealthManager.VideoHealthManager.defaultConfig;
  const featureEnabled = defaultConfig.featureEnabled;
  ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
  const obj = {
    video_toggle_reason,
    toggled_user_id,
    rtc_connection_id: null,
    media_session_id: null,
    video_health_manager_window_length: null,
    video_health_manager_poor_fps_ratio: null,
    video_health_manager_fps_threshold: null,
    is_video_shown: null,
    video_health_manager_backoff_time_seconds: null,
  };
  let tmp;
  if (global != null) {
    tmp = global();
  }
  obj.rtc_connection_id = tmp;
  let tmp2;
  if (require != null) {
    tmp2 = require();
  }
  obj.media_session_id = tmp2;
  let tmp3 = null;
  if (featureEnabled) {
    tmp3 = windowLength;
  }
  obj.video_health_manager_window_length = tmp3;
  let tmp4 = null;
  if (featureEnabled) {
    tmp4 = allowedPoorFpsRatio;
  }
  obj.video_health_manager_poor_fps_ratio = tmp4;
  let tmp5 = null;
  if (featureEnabled) {
    tmp5 = fpsThreshold;
  }
  obj.video_health_manager_fps_threshold = tmp5;
  obj.is_video_shown = is_video_shown;
  let tmp6 = null;
  if (featureEnabled) {
    tmp6 = backoffTimeSec;
  }
  obj.video_health_manager_backoff_time_seconds = tmp6;
  obj.track(AnalyticEvents.VIDEO_TOGGLED, obj);
}
export function setVideoToggleAnalyticsParams(getRTCConnectionId, getMediaSessionId) {
  global = getRTCConnectionId;
  require = getMediaSessionId;
}
