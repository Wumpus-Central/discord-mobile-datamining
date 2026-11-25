// === Module 16135: AgeNoticeSettingsPredicate ===

// Module 16135 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6805 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6806 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  return AgeNoticeExperiment.useIsAgeNoticeEnabled(closure_2);
}