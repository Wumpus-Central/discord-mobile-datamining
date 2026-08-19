// === Module 10631: UnreadSettingNoticeImpressionTracking ===

// Module 10631 (UnreadSettingNoticeImpressionTracking)
import obj132 from "obj132" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpressionDefault from "trackImpression" /* 9177 */;

const result = obj132.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  trackImpressionDefault(obj, undefined, items);
  return null;
};