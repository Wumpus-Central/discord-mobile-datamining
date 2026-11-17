// === Module 17246: AgeNoticeSettingsPredicate ===

// Module 17246 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6826 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6827 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  return AgeNoticeExperiment.useIsAgeNoticeEnabled(closure_2);
}