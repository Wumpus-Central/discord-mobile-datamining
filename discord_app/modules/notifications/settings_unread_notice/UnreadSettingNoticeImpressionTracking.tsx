// discord_app/modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import encodeProperties from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import trackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";

const result = obj132.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  trackImpressionDefault(obj, undefined, items);
  return null;
};