// discord_app/modules/channel/SelectedChannelManager.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import transitionTo from "../routing/router_utils.tsx";
import _modDef4975 from "../../actions/SelectedChannelActionCreators.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import transitionToGuild from "../routing/transitionToGuild.native.tsx";
import closure_3 from "../../stores/MediaEngineStore.tsx";
import closure_4 from "../../stores/SelectedChannelStore.tsx";
import { findFirstVoiceChannelId } from "../../stores/SelectedChannelStore.tsx";
import closure_6 from "../../stores/SelectedGuildStore.tsx";
import ME from "../../Constants.tsx";

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
    const voiceChannel = _modDef4975.selectVoiceChannel(findFirstVoiceChannelId(guild.id));
    const obj2 = _modDef4975;
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
      const voiceChannel = _modDef4975.selectVoiceChannel(channel.id, videoEnabled.isVideoEnabled());
      const obj2 = _modDef4975;
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