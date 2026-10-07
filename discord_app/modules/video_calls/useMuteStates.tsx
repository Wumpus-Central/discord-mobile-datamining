// discord_app/modules/video_calls/useMuteStates.tsx
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

const require = globalThis.__r;

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
  const obj = {
    selfMute: mediaEngineStore.isSelfMute() || mediaEngineStore.isSelfMutedTemporarily(),
    suppress: null,
    mute: null,
  };
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
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      _require = channel;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function l() {
          return getMuteStates({
            channel,
            authenticationStore: AuthenticationStore,
            voiceStateStore: VoiceStateStore,
            mediaEngineStore: MediaEngineStore,
            permissionStore: PermissionStore,
            impersonateStore: ImpersonateStore,
          });
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStoresObject(first, tmp10);
    }
  : (channel) => {
      _require = channel;
      const items = [AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore];
      return require("initialize").useStateFromStoresObject(items, () =>
        getMuteStates({
          channel,
          authenticationStore: AuthenticationStore,
          voiceStateStore: VoiceStateStore,
          mediaEngineStore: MediaEngineStore,
          permissionStore: PermissionStore,
          impersonateStore: ImpersonateStore,
        }),
      );
    };
export { getMuteStates };
