// discord_app/modules/voice_calls/useIsVoiceChannelFull.tsx
import ChannelUtils from "../../utils/ChannelUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  _require = arg0;
  const items = [VoiceStateStore, GuildStore];
  return require("initialize").useStateFromStores(items, () =>
    ChannelUtils.isChannelFull(closure_0, VoiceStateStore, GuildStore),
  );
}
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  _require = channel;
  const items = [PermissionStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let tmp2 = null == closure_0;
      if (!tmp2) {
        tmp2 = !PermissionStore.can(Permissions.CONNECT, tmp);
      }
      return tmp2;
    },
    items1,
  );
};
