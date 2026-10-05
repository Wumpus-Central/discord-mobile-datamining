// discord_app/modules/guild_scheduled_events/useCanCreateAnEvent.tsx
import Constants from "../../Constants.tsx";
import GuildChannelStore2 from "../../stores/GuildChannelStore.tsx";
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, dependencyMap;

const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildChannelStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp8;
        let tmp9;
        if (cResult[2] === arg0) {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp8, tmp9);
      }
      const fn = function _() {
        const guild = GuildStore.getGuild(closure_0);
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
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const items = [GuildStore, GuildChannelStore, PermissionStore];
      const items1 = [arg0, arg1];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const guild = GuildStore.getGuild(closure_0);
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
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default tmp2;
