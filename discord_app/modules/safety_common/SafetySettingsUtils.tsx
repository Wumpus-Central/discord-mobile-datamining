// === Module 16532: SafetySettingsUtils ===

// Module 16532 (SafetySettingsUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE });
}