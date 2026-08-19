// discord_app/utils/CreateInstantInviteUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import ME from "../Constants.tsx";
import comparator from "../stores/GuildChannelStore.tsx";
import comparator2 from "../stores/GuildChannelStore.tsx";
import getUncachedChannelPermissions from "../stores/PermissionStore.tsx";

({ GUILD_SELECTABLE_CHANNELS_KEY: c0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = comparator);
const Permissions = ME.Permissions;
const result = obj132.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((item, index) => closure_3.can(constants.CREATE_INSTANT_INVITE, item.channel));
};