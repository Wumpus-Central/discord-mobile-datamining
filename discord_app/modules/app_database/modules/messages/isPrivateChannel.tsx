// discord_app/modules/app_database/modules/messages/isPrivateChannel.tsx
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};