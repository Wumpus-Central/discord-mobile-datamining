// === Module 12115: useIsVoiceChannelFull ===

// Module 12115 (useIsVoiceChannelFull)
import ChannelUtils from "ChannelUtils" /* 6184 */;
import GuildStore from "GuildStore" /* 5014 */;
import PermissionStore from "PermissionStore" /* 5075 */;
import VoiceStateStore from "VoiceStateStore" /* 5815 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1083).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  _require = arg0;
  items = [VoiceStateStore, GuildStore];
  return require("initialize").useStateFromStores(items, () => ChannelUtils.isChannelFull(closure_0, VoiceStateStore, GuildStore));
};
export function useIsVoiceChannelLocked(channel) {
  _require = channel;
  items = [PermissionStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
}