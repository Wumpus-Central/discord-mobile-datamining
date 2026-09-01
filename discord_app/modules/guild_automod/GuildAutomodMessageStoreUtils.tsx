// discord_app/modules/guild_automod/GuildAutomodMessageStoreUtils.tsx
import set from "../../../_runtime/00002_set.js";
import MessageEmbedTypes from "../../../discord_common/js/shared/shared-constants/MessageEmbedTypes.tsx";

const result = set.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  return (
    type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE &&
    type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
  );
};
