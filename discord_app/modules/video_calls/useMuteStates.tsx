// === Module 7345: useMuteStates ===

// Module 7345 (useMuteStates)
import ImpersonateStore from "ImpersonateStore" /* 2014 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

const require = fn;
function getMuteStates(voiceStateStore) {
  ({ channel, authenticationStore } = voiceStateStore);
  if (authenticationStore === undefined) {
    authenticationStore = AuthenticationStore;
  }
  voiceStateStore = voiceStateStore.voiceStateStore;
  if (voiceStateStore === undefined) {
    voiceStateStore = VoiceStateStore;
  }
  let mediaEngineStore = voiceStateStore.mediaEngineStore;
  if (mediaEngineStore === undefined) {
    mediaEngineStore = MediaEngineStore;
  }
  let permissionStore = voiceStateStore.permissionStore;
  if (permissionStore === undefined) {
    permissionStore = PermissionStore;
  }
  let impersonateStore = voiceStateStore.impersonateStore;
  if (impersonateStore === undefined) {
    impersonateStore = ImpersonateStore;
  }
  let voiceState = null;
  if (null != channel) {
    const guildId = channel.getGuildId();
    voiceState = voiceStateStore.getVoiceState(guildId, authenticationStore.getId());
  }
  let guildId1;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  let isViewingRolesResult = impersonateStore.isViewingRoles(guildId1);
  if (isViewingRolesResult) {
    isViewingRolesResult = !permissionStore.can(Permissions.SPEAK, channel);
  }
  const obj = { selfMute: mediaEngineStore.isSelfMute() || mediaEngineStore.isSelfMutedTemporarily(), suppress: null, mute: null };
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
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(channel) {
  _require = channel;
  const items = [AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore];
  return require("initialize").useStateFromStoresObject(items, () => getMuteStates({ channel, authenticationStore: AuthenticationStore, voiceStateStore: VoiceStateStore, mediaEngineStore: MediaEngineStore, permissionStore: PermissionStore, impersonateStore: ImpersonateStore }));
};
export { getMuteStates };