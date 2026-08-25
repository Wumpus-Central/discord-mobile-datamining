// === Module 10902: useIsVoiceChannelFull ===

// Module 10902 (useIsVoiceChannelFull)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import closure_3 from "getUncachedChannelPermissions" /* 4025 */;
import closure_4 from "updateVoiceState" /* 4399 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_2];
  return _require(589).useStateFromStores(items, () => callback(closure_1_1[5]).isChannelFull(callback, closure_1_4, closure_1_2));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  const _require = channel;
  const items = [closure_3];
  const items1 = [channel];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !closure_1_3.can(closure_1_5.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
};