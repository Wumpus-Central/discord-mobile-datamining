// discord_app/modules/app_database/modules/messages/isPrivateChannel.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};