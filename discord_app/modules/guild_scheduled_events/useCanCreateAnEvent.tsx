// discord_app/modules/guild_scheduled_events/useCanCreateAnEvent.tsx
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(4707).GUILD_VOCAL_CHANNELS_KEY;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanCreateAnEvent(arg0, arg1) {
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
      class C {
        constructor() {
          tmp = closure_0;
          guild = closure_5.getGuild(closure_0);
          obj = closure_6;
          tmp3 = closure_6;
          tmp4 = Permissions;
          if (!closure_6.can(Permissions.ADMINISTRATOR, guild)) {
            tmp5 = tmp3;
            if (!obj.can(tmp4.CREATE_EVENTS, guild)) {
              tmp6 = closure_3;
              tmp7 = GUILD_VOCAL_CHANNELS_KEY;
              tmp8 = closure_3.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY];
              tmp9 = tmp8;
              iter = tmp8[Symbol.iterator]();
              num = 1;
              tmp10 = null;
              tmp11 = tmp8;
              tmp12 = iter;
              while (iter !== undefined) {
                channel = iter.next().channel;
                if (null == closure_1) {
                  tmp15 = closure_0;
                  tmp16 = closure_1;
                  obj2 = closure_0(closure_1[7]);
                  tmp17 = channel;
                  tmp18 = closure_2;
                  tmp19 = closure_6;
                  tmp20 = closure_6;
                  if (closure_6.can(closure_2(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
                    tmp21 = iter;
                    iter.return();
                    flag = true;
                    return true;
                  }
                } else {
                  tmp14 = channel;
                }
                continue;
              }
              flag2 = false;
              return false;
            }
          }
          return true;
        }
      }
      const items1 = [arg0, arg1];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = C;
      cResult[4] = items1;
      tmp9 = items1;
      tmp8 = C;
      const obj = require("c");
      tmp = _require;
    }
  : function useCanCreateAnEvent(arg0, arg1) {
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
