// discord_app/modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx
import closure_2 from "../../../../stores/ChannelStore.tsx";
import closure_3 from "../../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../Constants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  return _initialize.useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};