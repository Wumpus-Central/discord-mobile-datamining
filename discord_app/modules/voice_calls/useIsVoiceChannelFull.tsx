// discord_app/modules/voice_calls/useIsVoiceChannelFull.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import { Permissions } from "sum";

const require = arg1;
const result = require("updateVoiceState").fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  const _require = arg0;
  const items = [updateVoiceState, createGuildRecordFromRust];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => callback(outer1_1[5]).isChannelFull(callback, outer1_4, outer1_2));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  const items1 = [channel];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !outer1_3.can(outer1_5.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
};