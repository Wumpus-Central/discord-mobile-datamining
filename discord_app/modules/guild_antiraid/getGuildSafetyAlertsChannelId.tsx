// === Module 10037: getGuildSafetyAlertsChannelId ===

// Module 10037 (getGuildSafetyAlertsChannelId)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};