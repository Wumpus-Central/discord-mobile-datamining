// discord_app/modules/video_calls/useHasVideoPermission.tsx
import StreamPermissionUtils from "../go_live/utils/StreamPermissionUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _private;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore];
        cResult[0] = items;
        first = items;
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let _private;
      _require = arg0;
      const items = [GuildStore, PermissionStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
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
const result = size.fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default tmp2;
export const getVideoPermission = function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = StreamPermissionUtils;
    isPrivateResult = obj.canStreamInChannel(channel, GuildStore, PermissionStore, false);
  }
  return isPrivateResult;
};
