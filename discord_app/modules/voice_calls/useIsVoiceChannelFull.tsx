// discord_app/modules/voice_calls/useIsVoiceChannelFull.tsx
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import updateVoiceState from "../../stores/VoiceStateStore.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_2];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => callback(dependencyMap[5]).isChannelFull(callback, closure_1_4, closure_1_2));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  const _require = channel;
  const items = [closure_3];
  const items1 = [channel];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !closure_1_3.can(Permissions.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
};