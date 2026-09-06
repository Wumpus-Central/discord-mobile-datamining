// discord_app/actions/SelectedChannelActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import SelectedChannelActionCreatorsAdditional from "SelectedChannelActionCreatorsAdditional.native.tsx";
import GameConsoleActionCreatorsAll from "../modules/game_console/GameConsoleActionCreators.tsx";
import GameConsoleStore from "../modules/game_console/GameConsoleStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import MediaEngineStore from "../stores/MediaEngineStore.tsx";

require = fn;
const Constants = fn(1074);
({ ME: closure_7, PopoutWindowKeys, Routes: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default {
  selectChannel(guildId) {
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch, opensChannel } = guildId);
    const channelSelectionOrigin = SelectedChannelActionCreatorsAdditional.getChannelSelectionOrigin();
    ({ fromGuildId, fromChannelId } = channelSelectionOrigin);
    let tmp2 = null;
    if (guildId !== React5) {
      tmp2 = guildId;
    }
    DispatcherDefault.dispatch({
      type: "CHANNEL_SELECT",
      guildId: tmp2,
      channelId,
      fromGuildId,
      fromChannelId,
      messageId,
      jumpType,
      source,
      skipMessageFetch,
      opensChannel,
    });
  },
  selectPrivateChannel(id) {
    router_utils.transitionTo(React6.CHANNEL(React5, id));
  },
  selectVoiceChannel(id) {
    let flag = MediaEngineStore;
    if (MediaEngineStore === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    const channel = ChannelStore.getChannel(id);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (MediaEngineStore.isSupported()) {
      if (null != id) {
        const mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.interact();
      }
      const obj5 = SelectedChannelActionCreatorsAdditional;
      const voiceChannelAdditional = obj5.selectVoiceChannelAdditional(id, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != remoteSessionId) {
      GameConsoleActionCreatorsAll.remoteDisconnect(remoteSessionId);
    }
    const voiceChannel = this.selectVoiceChannel(null);
  },
};
