// discord_app/modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx
import Constants from "../../../../Constants.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const channel = ChannelStore.getChannel(closure_0);
          const canResult = null != channel && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, channel);
          return canResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ChannelStore, PermissionStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const channel = ChannelStore.getChannel(closure_0);
        const canResult = null != channel && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, channel);
        return canResult;
      });
    };
const result = size.fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = tmp2;
