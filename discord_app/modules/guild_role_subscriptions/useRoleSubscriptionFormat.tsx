// === Module 19873: useRoleSubscriptionFormat ===

// Module 19873 (useRoleSubscriptionFormat)
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4700 */;
import GuildStore from "GuildStore" /* 4665 */;

const require = globalThis.__r;

const require = fn;
const hasPermission = fn(4701).hasPermission;
const constants = fn(16487).GuildRoleSubscriptionFormat;
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  _require = arg0;
  items = [GuildStore, GuildRoleStore];
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
};