// discord_app/modules/media_engine/trackVideoToggle.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import VideoHealthManager from "../../lib/VideoHealthManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/media_engine/trackVideoToggle.tsx");

export default function trackVideoToggle(toggled_user_id, video_toggle_reason, is_video_shown) {
  let allowedPoorFpsRatio;
  let backoffTimeSec;
  let fpsThreshold;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let windowLength;
  const defaultConfig = VideoHealthManager.VideoHealthManager.defaultConfig;
  const featureEnabled = defaultConfig.featureEnabled;
  ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
  const obj = {
    video_toggle_reason,
    toggled_user_id,
    rtc_connection_id: tmp2,
    media_session_id: tmp3,
    video_health_manager_window_length: tmp4,
    video_health_manager_poor_fps_ratio: tmp5,
    video_health_manager_fps_threshold: tmp6,
    is_video_shown,
    video_health_manager_backoff_time_seconds: tmp7,
  };
  tmp2 = undefined;
  const track = AnalyticsUtilsDefault.track;
  const VIDEO_TOGGLED = AnalyticEvents.VIDEO_TOGGLED;
  AnalyticsUtilsDefault;
  if (_false != null) {
    tmp2 = _false();
  }
  tmp3 = undefined;
  if (React3 != null) {
    tmp3 = React3();
  }
  tmp4 = null;
  if (featureEnabled) {
    tmp4 = windowLength;
  }
  tmp5 = null;
  if (featureEnabled) {
    tmp5 = allowedPoorFpsRatio;
  }
  tmp6 = null;
  if (featureEnabled) {
    tmp6 = fpsThreshold;
  }
  tmp7 = null;
  if (featureEnabled) {
    tmp7 = backoffTimeSec;
  }
  track(VIDEO_TOGGLED, obj);
}
export function setVideoToggleAnalyticsParams(getRTCConnectionId, getMediaSessionId) {
  let closure_1_3 = getRTCConnectionId;
  let closure_1_4 = getMediaSessionId;
}
