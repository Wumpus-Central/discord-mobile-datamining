import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  const _require = channelId;
  const items = [ensureGuildLoaded, getUncachedChannelPermissions];
  return _initialize.useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_4.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};