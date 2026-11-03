// discord_app/modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx
import AgeNoticeConstants from "../AgeNoticeConstants.tsx";
import AgeNoticeExperiment from "../AgeNoticeExperiment.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsTinyBroncoSettingsEnabled() {
  return AgeNoticeExperiment.useIsTinyBroncoEnabled(closure_2);
}
