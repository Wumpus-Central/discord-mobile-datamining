// === Module 20281: CreateInstantInviteUtils ===

// Module 20281 (CreateInstantInviteUtils)
import Constants from "Constants" /* 1071 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4973 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import size from "module_2" /* 2 */;

let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export function getInvitableChannelForGuild(guildId) {
  const channels = GuildChannelStore.getChannels(guildId);
  items = [...channels[closure_1_1]];
  return items.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
}