// === Module 16344: useCanConnect ===

// Module 16344 (useCanConnect)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import { Permissions } from "sum" /* 505 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_4, closure_3, closure_5];
  const items1 = [arg0];
  return _require(589).useStateFromStoresObject(items, () => {
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