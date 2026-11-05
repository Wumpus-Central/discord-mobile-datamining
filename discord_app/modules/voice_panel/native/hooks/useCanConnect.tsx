// === Module 19550: useCanConnect ===

// Module 19550 (useCanConnect)
import ChannelUtils from "ChannelUtils" /* 6184 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildStore from "GuildStore" /* 5014 */;
import PermissionStore from "PermissionStore" /* 5075 */;
import VoiceStateStore from "VoiceStateStore" /* 5815 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1083).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  _require = arg0;
  items = [ChannelStore, PermissionStore, GuildStore, VoiceStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
      }
      tmp = isPrivateResult;
    }
    const obj = { canConnect: tmp, isAtMaxCapacity: null };
    let isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      isChannelFullResult = ChannelUtils.isChannelFull(channel, VoiceStateStore, GuildStore);
    }
    obj.isAtMaxCapacity = isChannelFullResult;
    return obj;
  }, items1);
};