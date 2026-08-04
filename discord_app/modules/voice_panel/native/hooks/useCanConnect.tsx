// discord_app/modules/voice_panel/native/hooks/useCanConnect.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import { Permissions } from "sum";

const require = arg1;
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  const _require = arg0;
  const items = [ensureGuildLoaded, getUncachedChannelPermissions, createGuildRecordFromRust, updateVoiceState];
  const items1 = [arg0];
  return _require(589).useStateFromStoresObject(items, () => {
    const channel = outer1_2.getChannel(callback);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = outer1_4.can(outer1_6.CONNECT, channel);
      }
      tmp = isPrivateResult;
    }
    const obj = { canConnect: tmp, isAtMaxCapacity: null };
    let isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      isChannelFullResult = callback(outer1_1[6]).isChannelFull(channel, outer1_5, outer1_3);
      const obj3 = callback(outer1_1[6]);
    }
    obj[1] = isChannelFullResult;
    return obj;
  }, items1);
};