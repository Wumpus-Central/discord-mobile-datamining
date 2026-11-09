// === Module 16901: AgeNoticeSettingsPredicate ===

// Module 16901 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6792 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6793 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  return AgeNoticeExperiment.useIsAgeNoticeEnabled(closure_2);
}