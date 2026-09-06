// discord_app/modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx",
);

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = {
    type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
    name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE,
  };
  const items = [id.id];
  useTrackImpressionDefault(obj, undefined, items);
  return null;
}
