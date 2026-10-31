// === Module 4935: embeddedActivityLocationUtils ===

// Module 4935 (embeddedActivityLocationUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/embeddedActivityLocationUtils.tsx");

export function getEmbeddedActivityLocationChannelId(_location) {
  if (null != _location) {
    let channel_id;
    if ("channel_id" in _location) {
      channel_id = _location.channel_id;
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