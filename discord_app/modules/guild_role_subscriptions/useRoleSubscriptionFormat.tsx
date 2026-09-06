// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
import noop from "../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
const hasPermission = fn(2016).hasPermission;
const constants = fn(15205).GuildRoleSubscriptionFormat;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [GuildStore, GuildRoleStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
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
  obj = { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
  return obj;
}
