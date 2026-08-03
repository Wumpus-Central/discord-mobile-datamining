import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import { Permissions } from "ME";

const require = arg1;
function getMuteStates(voiceStateStore) {
  let authenticationStore;
  let channel;
  ({ channel, authenticationStore } = voiceStateStore);
  if (authenticationStore === undefined) {
    authenticationStore = fetchFingerprint;
  }
  voiceStateStore = voiceStateStore.voiceStateStore;
  if (voiceStateStore === undefined) {
    voiceStateStore = updateVoiceState;
  }
  let mediaEngineStore = voiceStateStore.mediaEngineStore;
  if (mediaEngineStore === undefined) {
    mediaEngineStore = _detectH265HardwareDecode;
  }
  let permissionStore = voiceStateStore.permissionStore;
  if (permissionStore === undefined) {
    permissionStore = getUncachedChannelPermissions;
  }
  let impersonateStore = voiceStateStore.impersonateStore;
  if (impersonateStore === undefined) {
    impersonateStore = initialize;
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
  obj[1] = suppress;
  let flag;
  if (voiceState != null) {
    flag = voiceState.mute;
  }
  if (flag == null) {
    flag = false;
  }
  obj[2] = flag;
  return obj;
}
const result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(arg0) {
  const _require = arg0;
  const items = [fetchFingerprint, updateVoiceState, _detectH265HardwareDecode, getUncachedChannelPermissions, initialize];
  return _require(589).useStateFromStoresObject(items, () => outer1_8({ channel: closure_0, authenticationStore: outer1_3, voiceStateStore: outer1_6, mediaEngineStore: outer1_4, permissionStore: outer1_5, impersonateStore: outer1_2 }));
};
export { getMuteStates };