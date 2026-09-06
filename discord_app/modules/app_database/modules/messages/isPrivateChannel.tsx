// discord_app/modules/app_database/modules/messages/isPrivateChannel.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
