// discord_app/modules/voice_panel/native/hooks/useCanConnect.tsx
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  _require = arg0;
  const items = [ChannelStore, PermissionStore, GuildStore, VoiceStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(
    items,
    () => {
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
    },
    items1,
  );
}
