// === Module 9311: trackVoiceAndVideoSettingsUpdate ===

// Module 9311 (trackVoiceAndVideoSettingsUpdate)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(active_input_profile, enabled, RTCDebugStore, location_stack) {
  let StringResult;
  const track = AnalyticsUtilsDefault.track;
  const VOICE_AND_VIDEO_SETTINGS_UPDATED = AnalyticEvents.VOICE_AND_VIDEO_SETTINGS_UPDATED;
  AnalyticsUtilsDefault;
  if (null != RTCDebugStore) {
    const _String = String;
    StringResult = String(RTCDebugStore);
  }
  const obj = { previous_setting_value: StringResult, location_stack };
  obj[active_input_profile] = enabled;
  return track(VOICE_AND_VIDEO_SETTINGS_UPDATED, obj);
};