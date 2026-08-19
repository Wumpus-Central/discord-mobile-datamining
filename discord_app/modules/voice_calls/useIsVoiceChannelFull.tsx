// === Module 12535: useIsVoiceChannelFull ===

// Module 12535 (useIsVoiceChannelFull)
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import { Permissions } from "sum" /* 505 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_2];
  return _require(589).useStateFromStores(items, () => callback(dependencyMap[5]).isChannelFull(callback, closure_1_4, closure_1_2));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  const _require = channel;
  const items = [closure_3];
  const items1 = [channel];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !closure_1_3.can(Permissions.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
};