// discord_app/modules/guild_scheduled_events/useCanCreateAnEvent.tsx
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(4513).GUILD_VOCAL_CHANNELS_KEY;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildChannelStore, PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp8 = cResult[3];
          let tmp9 = cResult[4];
        }
        return tmp(504).useStateFromStores(first, tmp8, tmp9);
      }
      const fn = function _() {
        guild = GuildStore.getGuild(closure_0);
        if (!PermissionStore.can(Permissions.ADMINISTRATOR, guild)) {
          if (!PermissionStore.can(Permissions.CREATE_EVENTS, guild)) {
            const tmp8 = GuildChannelStore.getChannels(closure_0)[GUILD_VOCAL_CHANNELS_KEY];
            const iter = tmp8[Symbol.iterator]();
            while (iter !== undefined) {
              let channel = iter.next().channel;
              if (null == closure_1) {
                let obj2 = useManageResourcePermissions;
                if (PermissionStore.can(_slicedToArray(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
                  iter.return();
                  let flag = true;
                  return true;
                }
              }
              continue;
            }
            return false;
          }
        }
        return true;
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp9 = items1;
      tmp8 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const items = [GuildStore, GuildChannelStore, PermissionStore];
      const items1 = [arg0, arg1];
      return require("initialize").useStateFromStores(
        items,
        () => {
          guild = GuildStore.getGuild(closure_0);
          if (!PermissionStore.can(Permissions.ADMINISTRATOR, guild)) {
            if (!PermissionStore.can(Permissions.CREATE_EVENTS, guild)) {
              const tmp8 = GuildChannelStore.getChannels(closure_0)[GUILD_VOCAL_CHANNELS_KEY];
              const iter = tmp8[Symbol.iterator]();
              while (iter !== undefined) {
                let channel = iter.next().channel;
                if (null == closure_1) {
                  let obj2 = useManageResourcePermissions;
                  if (PermissionStore.can(_slicedToArray(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
                    iter.return();
                    let flag = true;
                    return true;
                  }
                }
                continue;
              }
              return false;
            }
          }
          return true;
        },
        items1,
      );
    };
