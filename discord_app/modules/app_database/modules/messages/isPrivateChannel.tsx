// === Module 5074: isPrivateChannel ===

// Module 5074 (isPrivateChannel)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};