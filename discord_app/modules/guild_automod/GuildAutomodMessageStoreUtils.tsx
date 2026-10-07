// discord_app/modules/guild_automod/GuildAutomodMessageStoreUtils.tsx
import MessageEmbedTypes from "../../../discord_common/js/shared/shared-constants/MessageEmbedTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  return (
    type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE &&
    type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
  );
};
