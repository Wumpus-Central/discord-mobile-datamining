// === Module 17015: getInvitableChannelForGuild ===

// Module 17015 (getInvitableChannelForGuild)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import comparator from "comparator" /* 1980 */;
import comparator2 from "comparator" /* 1980 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;

({ GUILD_SELECTABLE_CHANNELS_KEY: c0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = comparator);
const Permissions = ME.Permissions;
const result = obj132.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((item, index) => closure_3.can(constants.CREATE_INSTANT_INVITE, item.channel));
};