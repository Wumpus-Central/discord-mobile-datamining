// discord_app/stores/PermissionVADStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import MediaEngineStore from "MediaEngineStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import RTCConnectionStore from "RTCConnectionStore.tsx";
import VoiceStateStore from "VoiceStateStore.tsx";

function handleUpdateVADPermission() {
  const channelId = RTCConnectionStore.getChannelId();
  flag = true;
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const voiceState = VoiceStateStore.getVoiceState(guildId, AuthenticationStore.getId());
    let canResult =
      MediaEngineStore.getMode() !== constants.VOICE_ACTIVITY ||
      null == channel ||
      channel.isPrivate() ||
      channel.isGuildStageVoice();
    if (!canResult) {
      canResult = PermissionStore.can(constants2.USE_VAD, channel);
    }
    if (!canResult) {
      canResult = null == voiceState || voiceState.suppress || null != voiceState.requestToSpeakTimestamp;
      const tmp12 = null == voiceState || voiceState.suppress || null != voiceState.requestToSpeakTimestamp;
    }
    flag = canResult;
  }
  let flag2 = flag !== flag;
  if (flag2) {
    c11 = flag;
    const obj = { type: "SET_VAD_PERMISSION", hasPermission: flag };
    DispatcherDefault.dispatch(obj);
    flag2 = true;
  }
  return flag2;
}
const Constants = fn(1074);
({ InputModes: closure_8, Permissions: closure_9 } = Constants);
let c11 = true;
const Store = initializeDefault.Store;
class PermissionVADStore extends Store {}
const prototype = PermissionVADStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    AuthenticationStore,
    ChannelStore,
    MediaEngineStore,
    PermissionStore,
    RTCConnectionStore,
    VoiceStateStore,
  );
};
prototype["shouldShowWarning"] = function shouldShowWarning() {
  return !c11;
};
prototype["canUseVoiceActivity"] = function canUseVoiceActivity() {
  return flag;
};
PermissionVADStore.displayName = "PermissionVADStore";
const permissionVADStore = new PermissionVADStore(DispatcherDefault, {
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
        tmp = handleUpdateVADPermission();
      }
      return tmp;
    });
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleUnclearWarning() {
    c11 = flag;
  },
  PERMISSION_CLEAR_VAD_WARNING: function handleClearWarning() {
    c11 = true;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PermissionVADStore.tsx");

export default permissionVADStore;
