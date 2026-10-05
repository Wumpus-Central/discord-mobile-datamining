// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
import Constants from "../../Constants.tsx";
import GuildRoleRecord from "../../records/GuildRoleRecord.tsx";
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants.tsx";
import react from "../../../_runtime/00019_react.js";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, tmp3;

const hasPermission = GuildRoleRecord.hasPermission;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionFormat;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let SOME_CHANNELS;
      let closure_0;
      let first;
      let obj2;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class N {
          constructor() {
            guild = closure_5.getGuild(closure_0);
            everyoneRole = undefined;
            if (null != guild) {
              tmp3 = closure_4;
              everyoneRole = closure_4.getEveryoneRole(guild);
            }
            return everyoneRole;
          }
        }
        cResult[1] = arg0;
        cResult[2] = N;
      } else {
        class N {
          constructor() {
            guild = closure_5.getGuild(closure_0);
            everyoneRole = undefined;
            if (null != guild) {
              tmp3 = closure_4;
              everyoneRole = closure_4.getEveryoneRole(guild);
            }
            return everyoneRole;
          }
        }
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, N);
      if (null != stateFromStores) {
        class N {
          constructor() {
            guild = closure_5.getGuild(closure_0);
            everyoneRole = undefined;
            if (null != guild) {
              tmp3 = closure_4;
              everyoneRole = closure_4.getEveryoneRole(guild);
            }
            return everyoneRole;
          }
        }
        if (hasPermission(stateFromStores, Permissions.VIEW_CHANNEL)) {
          class N {
            constructor() {
              guild = closure_5.getGuild(closure_0);
              everyoneRole = undefined;
              if (null != guild) {
                tmp3 = closure_4;
                everyoneRole = closure_4.getEveryoneRole(guild);
              }
              return everyoneRole;
            }
          }
        } else {
          class N {
            constructor() {
              guild = closure_5.getGuild(closure_0);
              everyoneRole = undefined;
              if (null != guild) {
                tmp3 = closure_4;
                everyoneRole = closure_4.getEveryoneRole(guild);
              }
              return everyoneRole;
            }
          }
        }
        SOME_CHANNELS = tmp12;
      } else {
        class N {
          constructor() {
            guild = closure_5.getGuild(closure_0);
            everyoneRole = undefined;
            if (null != guild) {
              tmp3 = closure_4;
              everyoneRole = closure_4.getEveryoneRole(guild);
            }
            return everyoneRole;
          }
        }
        SOME_CHANNELS = constants.SOME_CHANNELS;
      }
      if (cResult[3] === SOME_CHANNELS) {
        class N {
          constructor() {
            guild = closure_5.getGuild(closure_0);
            everyoneRole = undefined;
            if (null != guild) {
              tmp3 = closure_4;
              everyoneRole = closure_4.getEveryoneRole(guild);
            }
            return everyoneRole;
          }
        }
        return obj2;
      }
      obj2 = { format: SOME_CHANNELS, isFullServerGating: SOME_CHANNELS === tmp9.ALL_CHANNELS };
      cResult[3] = SOME_CHANNELS;
      cResult[4] = SOME_CHANNELS === tmp9.ALL_CHANNELS;
      cResult[5] = obj2;
    }
  : (arg0) => {
      let closure_0;
      let stateFromStores;
      _require = arg0;
      const items = [GuildStore, GuildRoleStore];
      const obj = require("get initialized");
      stateFromStores = obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        let everyoneRole;
        if (null != guild) {
          everyoneRole = GuildRoleStore.getEveryoneRole(guild);
        }
        return everyoneRole;
      });
      const items1 = [stateFromStores];
      const memo = react.useMemo(() => {
        if (null != stateFromStores) {
          let SOME_CHANNELS;
          if (!hasPermission(tmp, Permissions.VIEW_CHANNEL)) {
            SOME_CHANNELS = constants.ALL_CHANNELS;
          }
          return SOME_CHANNELS;
        }
        SOME_CHANNELS = constants.SOME_CHANNELS;
      }, items1);
      return { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default tmp2;
