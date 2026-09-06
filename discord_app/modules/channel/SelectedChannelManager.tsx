// === Module 17482: handleGuildCreate ===

// Module 17482 (handleGuildCreate)
import dispatcherDefault from "dispatcher" /* 573 */;
import transitionTo from "transitionTo" /* 1100 */;
import _modDef5411 from "module_5411" /* 5411 */;
import initializeDefault from "initialize" /* 7118 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import closure_3 from "_detectH265HardwareDecode" /* 1908 */;
import closure_4 from "handleConnectionOpen" /* 2011 */;
import { findFirstVoiceChannelId } from "handleConnectionOpen" /* 2011 */;
import closure_6 from "handleConnectionOpen" /* 4381 */;
import ME from "ME" /* 1074 */;

require = arg1;
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
    const obj = transitionToGuild;
  }
  let tmp6 = guild.id === voiceChannelId;
  if (tmp6) {
    tmp6 = false !== guild.unavailable;
  }
  if (tmp6) {
    tmp6 = null == voiceChannelId;
  }
  if (tmp6) {
    const voiceChannel = _modDef5411.selectVoiceChannel(findFirstVoiceChannelId(guild.id));
    const obj2 = _modDef5411;
  }
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  if (channel.type === constants.GROUP_DM) {
    const originChannelId = channel.originChannelId;
    const channelId = store.getChannelId(closure_10);
    if (tmp) {
      transitionTo.transitionTo(closure_8.CHANNEL(closure_9, channel.id));
      const obj = transitionTo;
    }
    const obj3 = store;
    tmp = null == guildId.getGuildId() && null != originChannelId && originChannelId === channelId;
    if (tmp7) {
      const voiceChannel = _modDef5411.selectVoiceChannel(channel.id, videoEnabled.isVideoEnabled());
      const obj2 = _modDef5411;
    }
    tmp7 = null != originChannelId && originChannelId === store.getVoiceChannelId();
  }
};
prototype["handleLogout"] = function handleLogout() {
  dispatcherDefault.dispatch({ type: "VOICE_CHANNEL_SELECT", channelId: null, guildId: null, video: false, currentVoiceChannelId: null, joinVoiceId: null });
};
const selectedChannelManager = new SelectedChannelManager();
const result = require("set").fileFinishedImporting("modules/channel/SelectedChannelManager.tsx");

export default selectedChannelManager;