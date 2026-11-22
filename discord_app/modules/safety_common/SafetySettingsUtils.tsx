// === Module 15982: SafetySettingsUtils ===

// Module 15982 (SafetySettingsUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE });
}