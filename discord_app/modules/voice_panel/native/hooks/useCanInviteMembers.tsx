// discord_app/modules/voice_panel/native/hooks/useCanInviteMembers.tsx
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  _require = channelId;
  const items = [ChannelStore, PermissionStore];
  const items1 = [channelId];
  return require("useStateFromStores").useStateFromStores(
    items,
    () => {
      const channel = ChannelStore.getChannel(closure_0);
      let canResult = null != channel;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.CONNECT, channel);
      }
      if (canResult) {
        canResult = PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel);
      }
      return canResult;
    },
    items1,
  );
};
