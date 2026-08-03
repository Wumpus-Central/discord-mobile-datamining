// === Module 13543: handleUpdateVADPermission ===

// Module 13543 (handleUpdateVADPermission)
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import createRTCConnection from "createRTCConnection";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { Store } from "initialize";

let c9;
let metroImportAll;
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
      canResult = getUncachedChannelPermissions.can(constants2.USE_VAD, channel);
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
    importDefault(709).dispatch(obj);
    flag2 = true;
    const obj2 = importDefault(709);
  }
  return flag2;
}
({ InputModes: metroImportAll, Permissions: c9 } = ME);
let c10 = true;
let c11 = true;
class PermissionVADStore extends Store {
}
const prototype = PermissionVADStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, _detectH265HardwareDecode, getUncachedChannelPermissions, createRTCConnection, updateVoiceState);
};
prototype["shouldShowWarning"] = function shouldShowWarning() {
  return !c11;
};
prototype["canUseVoiceActivity"] = function canUseVoiceActivity() {
  return c10;
};
PermissionVADStore.displayName = "PermissionVADStore";
const permissionVADStore = new PermissionVADStore(require("dispatcher"), {
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
    let closure_11 = c10;
  },
  PERMISSION_CLEAR_VAD_WARNING: function handleClearWarning() {
    let c11 = true;
  }
});
const result = require("_detectH265HardwareDecode").fileFinishedImporting("stores/PermissionVADStore.tsx");

export default permissionVADStore;