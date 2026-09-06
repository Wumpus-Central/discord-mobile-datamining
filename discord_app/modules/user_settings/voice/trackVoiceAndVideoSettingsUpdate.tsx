// === Module 9094: trackVoiceAndVideoSettingsUpdate ===

// Module 9094 (trackVoiceAndVideoSettingsUpdate)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(active_input_profile, enabled, RTCDebugStore, location_stack) {
  let obj = AnalyticsUtilsDefault;
  let StringResult;
  if (null != RTCDebugStore) {
    const _String = String;
    StringResult = String(RTCDebugStore);
  }
  obj = { previous_setting_value: StringResult };
  obj[active_input_profile] = enabled;
  obj.location_stack = location_stack;
  return obj.track(AnalyticEvents.VOICE_AND_VIDEO_SETTINGS_UPDATED, obj);
};