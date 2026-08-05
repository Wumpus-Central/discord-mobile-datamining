// discord_app/stores/PermissionSpeakStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { Store } from "initialize";
import { Storage } from "../../discord_common/js/packages/storage/Storage.tsx";

const require = arg1;
const hideSuppressWarning = "hideSuppressWarning";
let c7 = false;
let c8 = true;
let c9 = false;
class PermissionSpeakStore extends Store {
}
const prototype = PermissionSpeakStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, createGuildRecordFromRust);
  const Storage = Storage /* Storage */.Storage;
  c9 = Storage.get(hideSuppressWarning) || c9;
};
prototype["isAFKChannel"] = function isAFKChannel() {
  const channel = store.getChannel(closure_3);
  if (null == channel) {
    return false;
  } else {
    guild = guild.getGuild(channel.getGuildId());
    return null != guild && channel.id === guild.afkChannelId;
  }
};
prototype["shouldShowWarning"] = function shouldShowWarning() {
  const channel = store.getChannel(closure_3);
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
const permissionSpeakStore = new PermissionSpeakStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let c7 = false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c2 = null;
    let c3 = null;
    let c8 = true;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      let flag = arg0;
      if (closure_2 === sessionId.sessionId) {
        if (suppress !== sessionId.suppress) {
          suppress = sessionId.suppress;
          let c8 = !suppress;
        }
        if (channelId !== sessionId.channelId) {
          channelId = sessionId.channelId;
          c8 = !suppress;
        }
        let tmp4 = closure_9;
        if (!closure_9) {
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
    let c8 = true;
    if (forever.forever) {
      let c9 = true;
      const Storage = Storage /* Storage */.Storage;
      const result = Storage.set(hideSuppressWarning, c9);
    }
  }
});
let result = require("Storage").fileFinishedImporting("stores/PermissionSpeakStore.tsx");

export default permissionSpeakStore;