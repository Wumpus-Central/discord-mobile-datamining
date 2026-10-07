// === Module 17668: SelectedChannelManager ===

// Module 17668 (SelectedChannelManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5575 */;
import transitionToGuild from "transitionToGuild" /* 6855 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;

require = fn;
const findFirstVoiceChannelId = fn(2103).findFirstVoiceChannelId;
const Constants = fn(1085);
({ ChannelTypes: closure_7, Routes: closure_8, ME: closure_9, NULL_STRING_GUILD_ID: c10 } = Constants);
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
  const channelId = SelectedChannelStore.getChannelId(options);
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
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
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(findFirstVoiceChannelId(guild.id));
  }
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  if (channel.type === constants.GROUP_DM) {
    const originChannelId = channel.originChannelId;
    const channelId = SelectedChannelStore.getChannelId(v65535);
    if (tmp) {
      router_utils.transitionTo(closure_1_8.CHANNEL(options, channel.id));
    }
    tmp = null == SelectedGuildStore.getGuildId() && null != originChannelId && originChannelId === channelId;
    if (tmp7) {
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id, MediaEngineStore.isVideoEnabled());
    }
    tmp7 = null != originChannelId && originChannelId === SelectedChannelStore.getVoiceChannelId();
  }
};
prototype["handleLogout"] = function handleLogout() {
  DispatcherDefault.dispatch({ type: "VOICE_CHANNEL_SELECT", channelId: null, guildId: null, video: false, currentVoiceChannelId: null, joinVoiceId: null });
};
const selectedChannelManager = new SelectedChannelManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/SelectedChannelManager.tsx");

export default selectedChannelManager;