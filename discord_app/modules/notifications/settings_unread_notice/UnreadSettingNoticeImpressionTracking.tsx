// discord_app/modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx
const result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: null, name: null };
  obj[0] = require("../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */.ImpressionTypes.VIEW;
  obj[1] = require("../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE;
  const items = [id.id];
  require("../../app_analytics/useTrackImpression.tsx")(obj, undefined, items);
  return null;
};