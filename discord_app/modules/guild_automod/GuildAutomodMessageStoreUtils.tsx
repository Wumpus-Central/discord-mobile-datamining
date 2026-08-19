// === Module 5424: isNotAutomodEmbed ===

// Module 5424 (isNotAutomodEmbed)
import obj132 from "obj132" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 693 */;

const result = obj132.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  return type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
};