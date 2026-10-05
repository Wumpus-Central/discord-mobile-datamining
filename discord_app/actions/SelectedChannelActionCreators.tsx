// === Module 5568: SelectedChannelActionCreators ===

// Module 5568 (SelectedChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import SelectedChannelActionCreatorsAdditional from "SelectedChannelActionCreatorsAdditional" /* 5569 */;
import GameConsoleActionCreatorsAll from "GameConsoleActionCreators" /* 9448 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

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
    dispatch({ type: "CHANNEL_SELECT", guildId: tmp3, channelId, fromGuildId, fromChannelId, messageId, jumpType, source, skipMessageFetch, opensChannel });
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
  }
};
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default obj;