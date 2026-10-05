// discord_app/modules/channel/SelectedChannelManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import router_utils from "../routing/router_utils.tsx";
import SelectedChannelStore2 from "../../stores/SelectedChannelStore.tsx";
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import transitionToGuild from "../routing/transitionToGuild.native.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import Constants from "../../Constants.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SelectedChannelStore = SelectedChannelStore2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
const findFirstVoiceChannelId = SelectedChannelStore2.findFirstVoiceChannelId;
({ ChannelTypes: metroImportDefault, Routes: metroImportAll, ME: c9, NULL_STRING_GUILD_ID: c10 } = Constants);
class SelectedChannelManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      GUILD_CREATE: applyArgumentsResult.handleGuildCreate,
      CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate,
      LOGOUT: applyArgumentsResult.handleLogout,
    };
    return applyArgumentsResult;
  }
  handleGuildCreate(guild) {
    guild = guild.guild;
    const channelId = SelectedChannelStore.getChannelId(React4);
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (guild.id === channelId) {
      const obj = transitionToGuild;
      obj.transitionToGuild(guild.id);
    }
    const tmp6 = guild.id === voiceChannelId && false !== guild.unavailable && null == voiceChannelId;
    if (tmp6) {
      const obj2 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj2.selectVoiceChannel(findFirstVoiceChannelId(guild.id));
    }
  }
  handleChannelCreate(channel) {
    channel = channel.channel;
    if (channel.type === metroImportDefault.GROUP_DM) {
      const originChannelId = channel.originChannelId;
      const channelId = SelectedChannelStore.getChannelId(authStore);
      const tmp = null == SelectedGuildStore.getGuildId() && null != originChannelId && originChannelId === channelId;
      if (tmp) {
        const obj = router_utils;
        obj.transitionTo(metroImportAll.CHANNEL(React4, channel.id));
      }
      const tmp7 = null != originChannelId && originChannelId === SelectedChannelStore.getVoiceChannelId();
      if (tmp7) {
        const obj2 = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj2.selectVoiceChannel(channel.id, MediaEngineStore.isVideoEnabled());
      }
    }
  }
  handleLogout() {
    const obj = DispatcherDefault;
    obj.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      channelId: null,
      guildId: null,
      video: false,
      currentVoiceChannelId: null,
      joinVoiceId: null,
    });
  }
}
const prototype = SelectedChannelManager.prototype;
const selectedChannelManager = new SelectedChannelManager();
const result = size.fileFinishedImporting("modules/channel/SelectedChannelManager.tsx");

export default selectedChannelManager;
