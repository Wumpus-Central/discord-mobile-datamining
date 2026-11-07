// === Module 15955: GuildAutomodMessageStoreUtils ===

// Module 15955 (GuildAutomodMessageStoreUtils)
import MessageEmbedTypes from "MessageEmbedTypes" /* 1094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export function isNotAutomodEmbed(type) {
  type = type.type;
  return type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
}