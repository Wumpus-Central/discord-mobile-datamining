// discord_app/modules/video_calls/useHasVideoPermission.tsx
import StreamPermissionUtils from "../go_live/utils/StreamPermissionUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default function useHasVideoPermission(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let tmp = null != closure_0;
      if (tmp) {
        let isPrivateResult = obj.isPrivate();
        if (!isPrivateResult) {
          const obj2 = StreamPermissionUtils;
          isPrivateResult = obj2.canStreamInChannel(obj, GuildStore, PermissionStore, false);
        }
        tmp = isPrivateResult;
      }
      return tmp;
    },
    items1,
  );
}
export const getVideoPermission = function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = StreamPermissionUtils;
    isPrivateResult = obj.canStreamInChannel(channel, GuildStore, PermissionStore, false);
  }
  return isPrivateResult;
};
