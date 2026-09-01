// discord_app/modules/app_database/modules/messages/isPrivateChannel.tsx
import set from "../../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
