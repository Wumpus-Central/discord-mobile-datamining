// discord_app/modules/voice_panel/native/hooks/useCanConnect.tsx
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import updateVoiceState from "../../../../stores/VoiceStateStore.tsx";
import { Permissions } from "../../../../../discord_common/js/shared/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_4, closure_3, closure_5];
  const items1 = [arg0];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    const channel = closure_1_2.getChannel(callback);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = closure_1_4.can(Permissions.CONNECT, channel);
      }
      tmp = isPrivateResult;
    }
    const obj = { canConnect: tmp, isAtMaxCapacity: null };
    let isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      isChannelFullResult = callback(dependencyMap[6]).isChannelFull(channel, closure_1_5, closure_1_3);
      const obj3 = callback(dependencyMap[6]);
    }
    obj[1] = isChannelFullResult;
    return obj;
  }, items1);
};