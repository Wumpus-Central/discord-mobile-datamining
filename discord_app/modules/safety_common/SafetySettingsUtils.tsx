// discord_app/modules/safety_common/SafetySettingsUtils.tsx
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export const trackSafetySettingsNoticeAnalytics = function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  let obj = require("../../utils/AnalyticsUtils.tsx");
  obj = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj);
};