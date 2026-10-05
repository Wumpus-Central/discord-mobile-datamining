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
}
