// discord_app/modules/guild_action_sheet/native/GuildActionSheetUtils.tsx
import Constants from "../../../Constants.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, obj2, tmp3;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class A {
          constructor() {
            tmp = closure_0;
            if (null == closure_0) {
              obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
            } else {
              obj = { canAccessSettings: null, canEditNickname: null, canManageChannels: null };
              obj2 = closure_2;
              obj.canAccessSettings = closure_2.canAccessGuildSettings(tmp);
              tmp2 = Permissions;
              tmp3 = closure_2.can(Permissions.CHANGE_NICKNAME, tmp) || obj2.can(tmp2.MANAGE_NICKNAMES, tmp);
              obj.canEditNickname = tmp3;
              obj.canManageChannels = obj2.can(tmp2.MANAGE_CHANNELS, tmp);
            }
            return obj;
          }
        }
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = A;
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        class A {
          constructor() {
            tmp = closure_0;
            if (null == closure_0) {
              obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
            } else {
              obj = { canAccessSettings: null, canEditNickname: null, canManageChannels: null };
              obj2 = closure_2;
              obj.canAccessSettings = closure_2.canAccessGuildSettings(tmp);
              tmp2 = Permissions;
              tmp3 = closure_2.can(Permissions.CHANGE_NICKNAME, tmp) || obj2.can(tmp2.MANAGE_NICKNAMES, tmp);
              obj.canEditNickname = tmp3;
              obj.canManageChannels = obj2.can(tmp2.MANAGE_CHANNELS, tmp);
            }
            return obj;
          }
        }
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, A, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [PermissionStore];
      const items1 = [arg0];
      return obj.useStateFromStoresObject(
        items,
        () => {
          let obj;
          if (null == closure_0) {
            obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
          } else {
            obj = {
              canAccessSettings: PermissionStore.canAccessGuildSettings(closure_0),
              canEditNickname:
                PermissionStore.can(Permissions.CHANGE_NICKNAME, closure_0) ||
                PermissionStore.can(Permissions.MANAGE_NICKNAMES, closure_0),
              canManageChannels: PermissionStore.can(Permissions.MANAGE_CHANNELS, closure_0),
            };
            PermissionStore.can(Permissions.CHANGE_NICKNAME, closure_0) ||
              PermissionStore.can(Permissions.MANAGE_NICKNAMES, closure_0);
          }
          return obj;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = tmp2;
