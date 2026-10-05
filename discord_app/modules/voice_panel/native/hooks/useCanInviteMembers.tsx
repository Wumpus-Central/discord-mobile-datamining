// discord_app/modules/voice_panel/native/hooks/useCanInviteMembers.tsx
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
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
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          const channel = ChannelStore.getChannel(closure_0);
          const canResult =
            null != channel &&
            PermissionStore.can(Permissions.CONNECT, channel) &&
            PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel);
          return canResult;
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
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ChannelStore, PermissionStore];
      const items1 = [arg0];
      const obj = require("useStateFromStores");
      return obj.useStateFromStores(
        items,
        () => {
          const channel = ChannelStore.getChannel(closure_0);
          const canResult =
            null != channel &&
            PermissionStore.can(Permissions.CONNECT, channel) &&
            PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel);
          return canResult;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = tmp2;
