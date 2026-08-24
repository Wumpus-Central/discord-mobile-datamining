// discord_app/modules/voice_panel/native/hooks/useCanInviteMembers.tsx
import closure_2 from "../../../../stores/ChannelStore.tsx";
import closure_3 from "../../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../../discord_common/js/shared/Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  const items1 = [channelId];
  return require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.CONNECT, channel);
    }
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
};