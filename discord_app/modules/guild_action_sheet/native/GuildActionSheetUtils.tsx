// discord_app/modules/guild_action_sheet/native/GuildActionSheetUtils.tsx
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildActionSheetPermissions(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
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
        let tmp7 = items1;
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
      let obj = require("c");
      return require("initialize").useStateFromStoresObject(first, A, tmp7);
    }
  : function useGuildActionSheetPermissions(arg0) {
      _require = arg0;
      const items = [PermissionStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStoresObject(
        items,
        () => {
          if (null == closure_0) {
            let obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
          } else {
            obj = {
              canAccessSettings: PermissionStore.canAccessGuildSettings(closure_0),
              canEditNickname:
                PermissionStore.can(Permissions.CHANGE_NICKNAME, closure_0) ||
                PermissionStore.can(Permissions.MANAGE_NICKNAMES, closure_0),
              canManageChannels: PermissionStore.can(Permissions.MANAGE_CHANNELS, closure_0),
            };
            const tmp3 =
              PermissionStore.can(Permissions.CHANGE_NICKNAME, closure_0) ||
              PermissionStore.can(Permissions.MANAGE_NICKNAMES, closure_0);
          }
          return obj;
        },
        items1,
      );
    };
