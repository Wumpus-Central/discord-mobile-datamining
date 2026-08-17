// discord_app/modules/video_calls/useHasVideoPermission.tsx
import canStreamInChannel from "canStreamInChannel" /* 7478 */;
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import closure_3 from "getUncachedChannelPermissions" /* 4021 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default function useHasVideoPermission(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => {
    let tmp = null != callback;
    if (tmp) {
      let isPrivateResult = obj.isPrivate();
      if (!isPrivateResult) {
        const obj2 = callback(closure_1_1[3]);
        isPrivateResult = obj2.canStreamInChannel(obj, closure_1_2, closure_1_3, false);
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