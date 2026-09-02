// === Module 16942: useCanConnect ===

// Module 16942 (useCanConnect)
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "getUncachedChannelPermissions" /* 4120 */;
import closure_5 from "updateVoiceState" /* 4497 */;
import { Permissions } from "sum" /* 502 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_4, closure_3, closure_5];
  const items1 = [arg0];
  return _require(586).useStateFromStoresObject(items, () => {
    const channel = closure_1_2.getChannel(callback);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = closure_1_4.can(closure_1_6.CONNECT, channel);
      }
      tmp = isPrivateResult;
    }
    const obj = { canConnect: tmp, isAtMaxCapacity: null };
    let isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      isChannelFullResult = callback(closure_1_1[6]).isChannelFull(channel, closure_1_5, closure_1_3);
      const obj3 = callback(closure_1_1[6]);
    }
    obj[1] = isChannelFullResult;
    return obj;
  }, items1);
};