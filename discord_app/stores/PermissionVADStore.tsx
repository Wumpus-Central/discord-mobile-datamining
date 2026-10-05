// === Module 14161: PermissionVADStore ===

// Module 14161 (PermissionVADStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
function handleUpdateVADPermission() {
  const channelId = RTCConnectionStore.getChannelId();
  flag = true;
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    const getVoiceState = VoiceStateStore.getVoiceState;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const voiceState = getVoiceState(guildId, AuthenticationStore.getId());
    let canResult = MediaEngineStore.getMode() !== metroImportAll.VOICE_ACTIVITY || null == channel || channel.isPrivate() || channel.isGuildStageVoice() || PermissionStore.can(constants2.USE_VAD, channel);
    if (!canResult) {
      canResult = null == voiceState || voiceState.suppress || null != voiceState.requestToSpeakTimestamp;
    }
    flag = canResult;
  }
  let flag2 = flag !== flag;
  if (flag2) {
    c11 = flag;
    const obj = { type: "SET_VAD_PERMISSION", hasPermission: flag };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj);
    flag2 = true;
  }
  return flag2;
}
({ InputModes: metroImportAll, Permissions: c9 } = Constants);
let flag = true;
let c11 = true;
const Store = get_initializedDefault.Store;
class PermissionVADStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, MediaEngineStore, PermissionStore, RTCConnectionStore, VoiceStateStore);
  }
  shouldShowWarning() {
    return !c11;
  }
  canUseVoiceActivity() {
    return flag;
  }
}
const prototype = PermissionVADStore.prototype;
PermissionVADStore.displayName = "PermissionVADStore";
let obj = {
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
    let id;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.some((userId) => {
      const tmp = userId.userId === id.getId() && handleUpdateVADPermission();
      return tmp;
    });
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleUnclearWarning() {
    c11 = flag;
  },
  PERMISSION_CLEAR_VAD_WARNING: function handleClearWarning() {
    c11 = true;
  }
};
const permissionVADStore = new PermissionVADStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PermissionVADStore.tsx");

export default permissionVADStore;