import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionOpen from "handleConnectionOpen";
import { findFirstVoiceChannelId } from "handleConnectionOpen";
import closure_6 from "handleConnectionOpen";
import ME from "ME";
import "initialize";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ ChannelTypes: error, Routes: metroImportAll, ME: c9, NULL_STRING_GUILD_ID: c10 } = ME);
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
    require(5866) /* transitionToGuild */.transitionToGuild(guild.id);
    const obj = require(5866) /* transitionToGuild */;
  }
  let tmp6 = guild.id === voiceChannelId;
  if (tmp6) {
    tmp6 = false !== guild.unavailable;
  }
  if (tmp6) {
    tmp6 = null == voiceChannelId;
  }
  if (tmp6) {
    const voiceChannel = importDefault(5096).selectVoiceChannel(findFirstVoiceChannelId(guild.id));
    const obj2 = importDefault(5096);
  }
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  if (channel.type === constants.GROUP_DM) {
    const originChannelId = channel.originChannelId;
    const channelId = store.getChannelId(closure_10);
    if (tmp) {
      require(1222) /* transitionTo */.transitionTo(closure_8.CHANNEL(closure_9, channel.id));
      const obj = require(1222) /* transitionTo */;
    }
    const obj3 = store;
    tmp = null == guildId.getGuildId() && null != originChannelId && originChannelId === channelId;
    if (tmp7) {
      const voiceChannel = importDefault(5096).selectVoiceChannel(channel.id, videoEnabled.isVideoEnabled());
      const obj2 = importDefault(5096);
    }
    tmp7 = null != originChannelId && originChannelId === store.getVoiceChannelId();
  }
};
prototype["handleLogout"] = function handleLogout() {
  importDefault(709).dispatch({ type: "VOICE_CHANNEL_SELECT", channelId: null, guildId: null, video: false, currentVoiceChannelId: null, joinVoiceId: null });
};
const selectedChannelManager = new SelectedChannelManager();
const result = require("handleConnectionOpen").fileFinishedImporting("modules/channel/SelectedChannelManager.tsx");

export default selectedChannelManager;