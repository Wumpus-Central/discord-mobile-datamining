// discord_app/utils/CreateInstantInviteUtils.tsx
import set from "../../_runtime/00002_set.js";
import ME from "../Constants.tsx";
import comparator from "../stores/GuildChannelStore.tsx";
import closure_2 from "../stores/GuildChannelStore.tsx";
import closure_3 from "../stores/PermissionStore.tsx";

({ GUILD_SELECTABLE_CHANNELS_KEY: c0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = comparator);
const Permissions = ME.Permissions;
const result = set.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((channel) => closure_3.can(constants.CREATE_INSTANT_INVITE, channel.channel));
};
