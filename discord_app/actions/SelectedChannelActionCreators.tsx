// discord_app/actions/SelectedChannelActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import transitionTo from "../modules/routing/router_utils.tsx";
import selectVoiceChannelAdditional from "SelectedChannelActionCreatorsAdditional.native.tsx";
import disconnectRemoteAll from "../modules/game_console/GameConsoleActionCreators.tsx";
import set from "../modules/game_console/GameConsoleStore.tsx";
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../stores/MediaEngineStore.tsx";
import ME from "../Constants.tsx";

require = fn;
({ ME: error, PopoutWindowKeys, Routes: closure_8 } = ME);
const result = require("obj132").fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default {
  selectChannel(guildId) {
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch } = guildId);
    let tmp = null;
    if (guildId !== closure_7) {
      tmp = guildId;
    }
    dispatcherDefault.dispatch({ type: "CHANNEL_SELECT", guildId: tmp, channelId, messageId, jumpType, source, skipMessageFetch });
  },
  selectPrivateChannel(id) {
    transitionTo.transitionTo(closure_8.CHANNEL(closure_7, id));
  },
  selectVoiceChannel(id, c1, flag2) {
    let flag = c1;
    if (c1 === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    channel = channel.getChannel(id);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (supported.isSupported()) {
      if (null != id) {
        const mediaEngine = supported.getMediaEngine();
        mediaEngine.interact();
      }
      const obj5 = selectVoiceChannelAdditional;
      const voiceChannelAdditional = obj5.selectVoiceChannelAdditional(id, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      disconnectRemoteAll.remoteDisconnect(remoteSessionId);
    }
    const voiceChannel = this.selectVoiceChannel(null);
  }
};