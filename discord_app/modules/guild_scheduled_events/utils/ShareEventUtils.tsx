// discord_app/modules/guild_scheduled_events/utils/ShareEventUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/ShareEventUtils.tsx");

export (guildId) => "https://discord.com/events/" + guildId.guildId + "/" + guildId.guildEventId
export function canUseInviteModal(arg0, arg1, arg2) {
  let tmp = arg0;
  if (arg0) {
    tmp = arg1;
  }
  if (tmp) {
    tmp = null != arg2;
  }
  return tmp;
}