// === Module 10755: useHasVideoPermission ===

// Module 10755 (useHasVideoPermission)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default function useHasVideoPermission(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let tmp = null != callback;
    if (tmp) {
      let isPrivateResult = obj.isPrivate();
      if (!isPrivateResult) {
        const obj2 = callback(outer1_1[3]);
        isPrivateResult = obj2.canStreamInChannel(obj, outer1_2, outer1_3, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  }, items1);
};
export const getVideoPermission = function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = require(6014) /* canStreamInChannel */;
    isPrivateResult = obj.canStreamInChannel(channel, createGuildRecordFromRust, getUncachedChannelPermissions, false);
  }
  return isPrivateResult;
};