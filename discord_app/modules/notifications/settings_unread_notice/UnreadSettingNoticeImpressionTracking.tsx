import { encodeProperties } from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { trackImpression } from "../../app_analytics/useTrackImpression.tsx";
// discord_app/modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx
const result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: null, name: null };
  obj[0] = encodeProperties /* encodeProperties */.ImpressionTypes.VIEW;
  obj[1] = encodeProperties /* encodeProperties */.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE;
  const items = [id.id];
  trackImpression(obj, undefined, items);
  return null;
};