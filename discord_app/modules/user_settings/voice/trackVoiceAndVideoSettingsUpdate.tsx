// discord_app/modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(
  active_input_profile,
  enabled,
  RTCDebugStore,
  location_stack,
) {
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
}
