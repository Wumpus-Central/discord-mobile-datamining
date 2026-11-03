// === Module 16727: AgeNoticeSettingsPredicate ===

// Module 16727 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6857 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6858 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsTinyBroncoSettingsEnabled() {
  return AgeNoticeExperiment.useIsTinyBroncoEnabled(closure_2);
}