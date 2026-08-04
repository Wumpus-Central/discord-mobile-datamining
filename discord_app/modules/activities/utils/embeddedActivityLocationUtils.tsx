// discord_app/modules/activities/utils/embeddedActivityLocationUtils.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/embeddedActivityLocationUtils.tsx");

export const getEmbeddedActivityLocationChannelId = function getEmbeddedActivityLocationChannelId(_location) {
  if (null != _location) {
    let channel_id;
    if ("channel_id" in _location) {
      channel_id = _location.channel_id;
    }
    return channel_id;
  }
};
export const getEmbeddedActivityLocationGuildId = function getEmbeddedActivityLocationGuildId(location) {
  if (null != location) {
    let guild_id;
    if ("guild_id" in location) {
      guild_id = location.guild_id;
    }
    return guild_id;
  }
};