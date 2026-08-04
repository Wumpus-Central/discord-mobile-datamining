// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
import noop from "noop";
import { hasPermission } from "GuildRoleRecordTypeTag";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildRoleSubscriptionFormat as closure_6 } from "MAX_SUBSCRIPTION_TIERS";
import { Permissions } from "ME";

const require = arg1;
const result = require("createGuildRoleRecordFromRust").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores[6]);
  const items = [createGuildRecordFromRust, createGuildRoleRecordFromRust];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    let everyoneRole;
    if (null != guild) {
      everyoneRole = outer1_4.getEveryoneRole(guild);
    }
    return everyoneRole;
  });
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      if (!outer1_3(tmp, outer1_7.VIEW_CHANNEL)) {
        let SOME_CHANNELS = outer1_6.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = outer1_6.SOME_CHANNELS;
  }, items1);
  obj = { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
  return obj;
};