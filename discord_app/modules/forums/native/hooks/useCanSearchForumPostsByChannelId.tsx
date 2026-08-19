// discord_app/modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(Permissions.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};