// discord_app/modules/voice_panel/native/hooks/useCanInviteMembers.tsx
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../../discord_common/js/shared/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  const items1 = [channelId];
  return require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(Permissions.CONNECT, channel);
    }
    if (canResult) {
      canResult = closure_1_3.can(Permissions.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
};