// discord_app/modules/video_calls/useHasVideoPermission.tsx
import canStreamInChannel from "../go_live/utils/StreamPermissionUtils.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default function useHasVideoPermission(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp = null != callback;
    if (tmp) {
      let isPrivateResult = callback.isPrivate();
      if (!isPrivateResult) {
        const obj2 = callback(dependencyMap[3]);
        isPrivateResult = obj2.canStreamInChannel(callback, closure_1_2, closure_1_3, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  }, items1);
};
export const getVideoPermission = function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = canStreamInChannel;
    isPrivateResult = obj.canStreamInChannel(channel, closure_2, closure_3, false);
  }
  return isPrivateResult;
};