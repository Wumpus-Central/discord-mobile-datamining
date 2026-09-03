// === Module 17634: getInvitableChannelForGuild ===

// Module 17634 (getInvitableChannelForGuild)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import comparator from "comparator" /* 1981 */;
import closure_2 from "comparator" /* 1981 */;
import closure_3 from "getUncachedChannelPermissions" /* 4120 */;

({ GUILD_SELECTABLE_CHANNELS_KEY: c0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = comparator);
const Permissions = ME.Permissions;
const result = set.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((channel) => closure_3.can(constants.CREATE_INSTANT_INVITE, channel.channel));
};