// === Module 18250: useRoleSubscriptionFormat ===

// Module 18250 (useRoleSubscriptionFormat)
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

const require = fn;
const hasPermission = fn(2119).hasPermission;
const constants = fn(15300).GuildRoleSubscriptionFormat;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useRoleSubscriptionFormat(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildRoleStore];
    cResult[0] = items;
    let first = items;
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
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, N);
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
    if (cResult[3] === tmp9) {
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
      return tmp17;
    }
    const obj2 = { format: tmp9, isFullServerGating: tmp9 === constants.ALL_CHANNELS };
    cResult[3] = tmp9;
    cResult[4] = tmp9 === constants.ALL_CHANNELS;
    cResult[5] = obj2;
    tmp17 = obj2;
  }
  const tmpResult = require("initialize");
}) : (function useRoleSubscriptionFormat(arg0) {
  _require = arg0;
  const items = [GuildStore, GuildRoleStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let everyoneRole;
    if (null != guild) {
      everyoneRole = GuildRoleStore.getEveryoneRole(guild);
    }
    return everyoneRole;
  });
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    if (null != stateFromStores) {
      if (!hasPermission(tmp, Permissions.VIEW_CHANNEL)) {
        let SOME_CHANNELS = constants.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = constants.SOME_CHANNELS;
  }, items1);
  return { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
});