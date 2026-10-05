// discord_app/actions/SelectedChannelActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import SelectedChannelActionCreatorsAdditional from "SelectedChannelActionCreatorsAdditional.native.tsx";
import GameConsoleActionCreatorsAll from "../modules/game_console/GameConsoleActionCreators.tsx";
import GameConsoleStore from "../modules/game_console/GameConsoleStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import MediaEngineStore from "../stores/MediaEngineStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let PopoutWindowKeys;
let metroImportAll;
let metroImportDefault;
({ ME: metroImportDefault, PopoutWindowKeys, Routes: metroImportAll } = Constants);
let obj = {
  selectChannel(guildId) {
    let channelId;
    let fromChannelId;
    let fromGuildId;
    let jumpType;
    let messageId;
    let opensChannel;
    let skipMessageFetch;
    let source;
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch, opensChannel } = guildId);
    const obj = SelectedChannelActionCreatorsAdditional;
    const channelSelectionOrigin = obj.getChannelSelectionOrigin();
    ({ fromGuildId, fromChannelId } = channelSelectionOrigin);
    let tmp3 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (guildId !== metroImportDefault) {
      tmp3 = guildId;
    }
    dispatch({
      type: "CHANNEL_SELECT",
      guildId: tmp3,
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
    const obj = router_utils;
    obj.transitionTo(metroImportAll.CHANNEL(metroImportDefault, id));
  },
  selectVoiceChannel(id) {
    let guildId;
    let flag = MediaEngineStore;
    if (MediaEngineStore === undefined) {
      flag = false;
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    const channel = ChannelStore.getChannel(id);
    if (channel != null) {
      guildId = channel.getGuildId();
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
      const obj = GameConsoleActionCreatorsAll;
      obj.remoteDisconnect(remoteSessionId);
    }
    const voiceChannel = this.selectVoiceChannel(null);
  },
};
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default obj;
