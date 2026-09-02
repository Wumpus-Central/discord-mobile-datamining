// === Module 14274: handleUpdateVADPermission ===

// Module 14274 (handleUpdateVADPermission)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_2 from "fetchFingerprint" /* 1215 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "_detectH265HardwareDecode" /* 4529 */;
import closure_5 from "getUncachedChannelPermissions" /* 4120 */;
import closure_6 from "createRTCConnection" /* 4554 */;
import closure_7 from "updateVoiceState" /* 4497 */;
import ME from "ME" /* 673 */;

function handleUpdateVADPermission() {
  channelId = channelId.getChannelId();
  let flag = true;
  if (null != channelId) {
    channel = channel.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    voiceState = voiceState.getVoiceState(guildId, id.getId());
    let canResult = mode.getMode() !== constants.VOICE_ACTIVITY || null == channel || channel.isPrivate() || channel.isGuildStageVoice();
    if (!canResult) {
      canResult = closure_5.can(constants2.USE_VAD, channel);
    }
    if (!canResult) {
      canResult = null == voiceState || voiceState.suppress || null != voiceState.requestToSpeakTimestamp;
      const tmp12 = null == voiceState || voiceState.suppress || null != voiceState.requestToSpeakTimestamp;
    }
    flag = canResult;
  }
  let flag2 = flag !== flag;
  if (flag2) {
    const obj = { type: "SET_VAD_PERMISSION", hasPermission: null };
    obj[1] = flag;
    dispatcherDefault.dispatch(obj);
    flag2 = true;
    const obj2 = dispatcherDefault;
  }
  return flag2;
}
({ InputModes: closure_8, Permissions: c9 } = ME);
let c10 = true;
let c11 = true;
const Store = initializeDefault.Store;
class PermissionVADStore extends Store {
}
const prototype = PermissionVADStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3, closure_4, closure_5, closure_6, closure_7);
};
prototype["shouldShowWarning"] = function shouldShowWarning() {
  return !c11;
};
prototype["canUseVoiceActivity"] = function canUseVoiceActivity() {
  return c10;
};
PermissionVADStore.displayName = "PermissionVADStore";
const permissionVADStore = new PermissionVADStore(dispatcherDefault, {
  RTC_CONNECTION_STATE: handleUpdateVADPermission,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: handleUpdateVADPermission,
  AUDIO_SET_MODE: handleUpdateVADPermission,
  CHANNEL_UPDATES: handleUpdateVADPermission,
  THREAD_UPDATE: handleUpdateVADPermission,
  GUILD_ROLE_UPDATE: handleUpdateVADPermission,
  GUILD_MEMBER_UPDATE: handleUpdateVADPermission,
  IMPERSONATE_UPDATE: handleUpdateVADPermission,
  IMPERSONATE_STOP: handleUpdateVADPermission,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.some((userId) => {
      let tmp = userId.userId === id.getId();
      if (tmp) {
        tmp = callback();
      }
      return tmp;
    });
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleUnclearWarning() {
    closure_11 = c10;
  },
  PERMISSION_CLEAR_VAD_WARNING: function handleClearWarning() {
    c11 = true;
  }
});
const result = require("set").fileFinishedImporting("stores/PermissionVADStore.tsx");

export default permissionVADStore;