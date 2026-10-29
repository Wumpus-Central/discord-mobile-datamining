// === Module 4926: embeddedActivityLocationUtils ===

// Module 4926 (embeddedActivityLocationUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/embeddedActivityLocationUtils.tsx");

export function getEmbeddedActivityLocationChannelId(connectedActivityLocation) {
  if (null != connectedActivityLocation) {
    let channel_id;
    if ("channel_id" in connectedActivityLocation) {
      channel_id = connectedActivityLocation.channel_id;
    }
    return channel_id;
  }
}
export function getEmbeddedActivityLocationGuildId(location) {
  if (null != location) {
    let guild_id;
    if ("guild_id" in location) {
      guild_id = location.guild_id;
    }
    return guild_id;
  }
}