// === Module 16700: handleGuildCreate ===

// Module 16700 (handleGuildCreate)
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import _modDef4975 from "module_4975" /* 4975 */;
import initializeDefault from "initialize" /* 5038 */;
import transitionToGuild from "transitionToGuild" /* 7302 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import { findFirstVoiceChannelId } from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;
import ME from "ME" /* 676 */;

require = fn;
({ ChannelTypes: error, Routes: closure_8, ME: c9, NULL_STRING_GUILD_ID: c10 } = ME);
initializeDefault;
class SelectedChannelManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { GUILD_CREATE: applyArgumentsResult.handleGuildCreate, CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate, LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
const prototype = SelectedChannelManager.prototype;
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  guild = guild.guild;
  const channelId = store.getChannelId(closure_9);
  const voiceChannelId = store.getVoiceChannelId();
  if (guild.id === channelId) {
    transitionToGuild.transitionToGuild(guild.id);
  }
  let tmp6 = guild.id === voiceChannelId;
  if (tmp6) {
    tmp6 = false !== guild.unavailable;
  }
  if (tmp6) {
    tmp6 = null == voiceChannelId;
  }
  if (tmp6) {
    const voiceChannel = _modDef4975.selectVoiceChannel(findFirstVoiceChannelId(guild.id));
  }
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  if (channel.type === constants.GROUP_DM) {
    const originChannelId = channel.originChannelId;
    const channelId = store.getChannelId(closure_10);
    if (tmp) {
      transitionTo.transitionTo(closure_8.CHANNEL(closure_9, channel.id));
    }
    tmp = null == guildId.getGuildId() && null != originChannelId && originChannelId === channelId;
    if (tmp7) {
      const voiceChannel = _modDef4975.selectVoiceChannel(channel.id, videoEnabled.isVideoEnabled());
    }
    tmp7 = null != originChannelId && originChannelId === store.getVoiceChannelId();
  }
};
prototype["handleLogout"] = function handleLogout() {
  dispatcherDefault.dispatch({ type: "VOICE_CHANNEL_SELECT", channelId: null, guildId: null, video: false, currentVoiceChannelId: null, joinVoiceId: null });
};
const selectedChannelManager = new SelectedChannelManager();
const result = require("obj132").fileFinishedImporting("modules/channel/SelectedChannelManager.tsx");

export default selectedChannelManager;