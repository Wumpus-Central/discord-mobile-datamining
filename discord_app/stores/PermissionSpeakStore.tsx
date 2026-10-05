// discord_app/stores/PermissionSpeakStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildStore from "GuildStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let c2, c3, channelId, suppress;

const hideSuppressWarning = "hideSuppressWarning";
let c7 = false;
let c8 = true;
let c9 = false;
const Store = get_initializedDefault.Store;
class PermissionSpeakStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildStore);
    const Storage = Storage2.Storage;
    const tmp2 = Storage.get(hideSuppressWarning) || c9;
    c9 = tmp2;
  }
  isAFKChannel() {
    const channel = ChannelStore.getChannel(c3);
    if (null == channel) {
      return false;
    } else {
      const guild = GuildStore.getGuild(channel.getGuildId());
      return null != guild && channel.id === guild.afkChannelId;
    }
  }
  shouldShowWarning() {
    const channel = ChannelStore.getChannel(c3);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    return !isGuildStageVoiceResult && !c8;
  }
}
const prototype = PermissionSpeakStore.prototype;
PermissionSpeakStore.displayName = "PermissionSpeakStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    c7 = false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c2 = null;
    c3 = null;
    c8 = true;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, sessionId) => {
      let flag = acc;
      if (closure_1_2 === sessionId.sessionId) {
        if (suppress !== sessionId.suppress) {
          suppress = sessionId.suppress;
          c8 = !suppress;
        }
        if (channelId !== sessionId.channelId) {
          channelId = sessionId.channelId;
          c8 = !suppress;
        }
        flag = true;
        const tmp4 = closure_1_9 || null == sessionId.channelId;
        if (tmp4) {
          c8 = true;
          flag = true;
        }
      }
      return flag;
    }, false);
  },
  PERMISSION_CLEAR_SUPPRESS_WARNING: function handleClearWarning(forever) {
    c8 = true;
    if (forever.forever) {
      c9 = true;
      const Storage = Storage2.Storage;
      const result = Storage.set(hideSuppressWarning, c9);
    }
  },
};
const permissionSpeakStore = new PermissionSpeakStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/PermissionSpeakStore.tsx");

export default permissionSpeakStore;
