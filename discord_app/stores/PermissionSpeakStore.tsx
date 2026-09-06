// === Module 13751: PermissionSpeakStore ===

// Module 13751 (PermissionSpeakStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const hideSuppressWarning = "hideSuppressWarning";
let c7 = false;
let c8 = true;
let c9 = false;
const Store = initializeDefault.Store;
class PermissionSpeakStore extends Store {
}
const prototype = PermissionSpeakStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildStore);
  const Storage = Storage2.Storage;
  c9 = Storage.get(hideSuppressWarning) || c9;
};
prototype["isAFKChannel"] = function isAFKChannel() {
  const channel = ChannelStore.getChannel(c3);
  if (null == channel) {
    return false;
  } else {
    const guild = GuildStore.getGuild(channel.getGuildId());
    return null != guild && channel.id === guild.afkChannelId;
  }
};
prototype["shouldShowWarning"] = function shouldShowWarning() {
  const channel = ChannelStore.getChannel(c3);
  let isGuildStageVoiceResult;
  if (channel != null) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let tmp2 = !isGuildStageVoiceResult;
  if (!isGuildStageVoiceResult) {
    tmp2 = !c8;
  }
  return tmp2;
};
PermissionSpeakStore.displayName = "PermissionSpeakStore";
const permissionSpeakStore = new PermissionSpeakStore(DispatcherDefault, {
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
        let tmp4 = closure_1_9;
        if (!closure_1_9) {
          tmp4 = null == sessionId.channelId;
        }
        flag = true;
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
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/PermissionSpeakStore.tsx");

export default permissionSpeakStore;