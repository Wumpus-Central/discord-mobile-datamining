// === Module 17126: useCanConnect ===

// Module 17126 (useCanConnect)
import ChannelUtils from "ChannelUtils" /* 4705 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  _require = arg0;
  const items = [ChannelStore, PermissionStore, GuildStore, VoiceStateStore];
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