// discord_app/modules/video_calls/useHasVideoPermission.tsx
import StreamPermissionUtils from "../go_live/utils/StreamPermissionUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp = null != _private;
          if (tmp) {
            let isPrivateResult = _private.isPrivate();
            if (!isPrivateResult) {
              const obj2 = StreamPermissionUtils;
              isPrivateResult = obj2.canStreamInChannel(_private, GuildStore, PermissionStore, false);
            }
            tmp = isPrivateResult;
          }
          return tmp;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      _require = arg0;
      const items = [GuildStore, PermissionStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          let tmp = null != _private;
          if (tmp) {
            let isPrivateResult = _private.isPrivate();
            if (!isPrivateResult) {
              const obj2 = StreamPermissionUtils;
              isPrivateResult = obj2.canStreamInChannel(_private, GuildStore, PermissionStore, false);
            }
            tmp = isPrivateResult;
          }
          return tmp;
        },
        items1,
      );
    };
export const getVideoPermission = function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = StreamPermissionUtils;
    isPrivateResult = obj.canStreamInChannel(channel, GuildStore, PermissionStore, false);
  }
  return isPrivateResult;
};
