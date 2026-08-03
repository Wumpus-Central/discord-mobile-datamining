// === Module 16657: getInvitableChannelForGuild ===

// Module 16657 (getInvitableChannelForGuild)
import comparator from "comparator";
import closure_2 from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

let c0;
let closure_1;
({ GUILD_SELECTABLE_CHANNELS_KEY: c0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = comparator);
const result = require("ME").fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((channel) => getUncachedChannelPermissions.can(constants.CREATE_INSTANT_INVITE, channel.channel));
};