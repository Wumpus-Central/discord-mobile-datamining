// discord_app/modules/guild_automod/GuildAutomodMessageStoreUtils.tsx
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  return type !== require("../../../discord_common/js/shared/shared-constants/MessageEmbedTypes.tsx") /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== require("../../../discord_common/js/shared/shared-constants/MessageEmbedTypes.tsx") /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
};