// === Module 10406: useMuteStates ===

// Module 10406 (useMuteStates)
import ImpersonateStore from "ImpersonateStore" /* 4948 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import VoiceStateStore from "VoiceStateStore" /* 5691 */;

const require = globalThis.__r;

const require = fn;
function getMuteStates(VoiceStateStore) {
  ({ channel, AuthenticationStore } = VoiceStateStore);
  VoiceStateStore = VoiceStateStore.VoiceStateStore;
  MediaEngineStore = VoiceStateStore.MediaEngineStore;
  PermissionStore = VoiceStateStore.PermissionStore;
  ImpersonateStore = VoiceStateStore.ImpersonateStore;
  let voiceState = null;
  if (null != channel) {
    const guildId = channel.getGuildId();
    voiceState = VoiceStateStore.getVoiceState(guildId, AuthenticationStore.getId());
  }
  let guildId1;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  let isViewingRolesResult = ImpersonateStore.isViewingRoles(guildId1);
  if (isViewingRolesResult) {
    isViewingRolesResult = !PermissionStore.can(Permissions.SPEAK, channel);
  }
  const obj = { selfMute: MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily(), suppress: null, mute: null };
  let suppress;
  if (voiceState != null) {
    suppress = voiceState.suppress;
  }
  if (!suppress) {
    suppress = isViewingRolesResult;
  }
  obj.suppress = suppress;
  let flag;
  if (voiceState != null) {
    flag = voiceState.mute;
  }
  if (flag == null) {
    flag = false;
  }
  obj.mute = flag;
  return obj;
}
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(channel) {
  _require = channel;
  items = [AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore];
  return require("initialize").useStateFromStoresObject(items, () => getMuteStates({ channel, AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore }));
};
export { getMuteStates };