// === Module 10452: UnreadSettingNoticeImpressionTracking ===

// Module 10452 (UnreadSettingNoticeImpressionTracking)
import c from "c" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8941 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UnreadSettingNoticeImpressionTracking(id) {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const items = [id.id];
    cResult[1] = id.id;
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  useTrackImpressionDefault(first, undefined, tmp5);
  return null;
}) : (function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  useTrackImpressionDefault(obj, undefined, items);
  return null;
});