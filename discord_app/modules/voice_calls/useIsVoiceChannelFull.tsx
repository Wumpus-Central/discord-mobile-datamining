// === Module 10194: useIsVoiceChannelFull ===

// Module 10194 (useIsVoiceChannelFull)
import ChannelUtils from "ChannelUtils" /* 4901 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import VoiceStateStore from "VoiceStateStore" /* 4775 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  _require = arg0;
  const items = [VoiceStateStore, GuildStore];
  return require("initialize").useStateFromStores(items, () => ChannelUtils.isChannelFull(closure_0, VoiceStateStore, GuildStore));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  _require = channel;
  const items = [PermissionStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
};