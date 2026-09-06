// discord_app/utils/CreateInstantInviteUtils.tsx
import Constants from "../Constants.tsx";
import GuildChannelStore from "../stores/GuildChannelStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import size from "../../_runtime/metro/00002__.js";

({ GUILD_SELECTABLE_CHANNELS_KEY: closure_0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = GuildChannelStore);
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  const channels = GuildChannelStore.getChannels(guildId);
  const items = [...channels[closure_1_1]];
  return items.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
};
