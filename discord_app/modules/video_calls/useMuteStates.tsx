// === Module 7305: getMuteStates ===

// Module 7305 (getMuteStates)
import initialize from "initialize" /* 1982 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
function getMuteStates(voiceStateStore) {
  ({ channel, authenticationStore } = voiceStateStore);
  if (authenticationStore === undefined) {
    authenticationStore = closure_3;
  }
  voiceStateStore = voiceStateStore.voiceStateStore;
  if (voiceStateStore === undefined) {
    voiceStateStore = closure_6;
  }
  let mediaEngineStore = voiceStateStore.mediaEngineStore;
  if (mediaEngineStore === undefined) {
    mediaEngineStore = closure_4;
  }
  let permissionStore = voiceStateStore.permissionStore;
  if (permissionStore === undefined) {
    permissionStore = closure_5;
  }
  let impersonateStore = voiceStateStore.impersonateStore;
  if (impersonateStore === undefined) {
    impersonateStore = closure_2;
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
const result = require("obj132").fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_6, closure_4, closure_5, closure_2];
  return _require(589).useStateFromStoresObject(items, () => getMuteStates({ channel: closure_0, authenticationStore: closure_1_3, voiceStateStore: closure_1_6, mediaEngineStore: closure_1_4, permissionStore: closure_1_5, impersonateStore: closure_1_2 }));
};
export { getMuteStates };