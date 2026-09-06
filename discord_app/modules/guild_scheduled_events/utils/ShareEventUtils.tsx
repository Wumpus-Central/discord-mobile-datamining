// === Module 9775: ShareEventUtils ===

// Module 9775 (ShareEventUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/ShareEventUtils.tsx");

export const SHARE_EVENT_DETAILS_LINK = (guildId) => "https://discord.com/events/" + guildId.guildId + "/" + guildId.guildEventId;
export const canUseInviteModal = function canUseInviteModal(arg0, arg1, arg2) {
  let tmp = arg0;
  if (arg0) {
    tmp = arg1;
  }
  if (tmp) {
    tmp = null != arg2;
  }
  return tmp;
};