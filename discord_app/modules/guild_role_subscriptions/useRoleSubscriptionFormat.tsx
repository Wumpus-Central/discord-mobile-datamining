// === Module 17304: useRoleSubscriptionFormat ===

// Module 17304 (useRoleSubscriptionFormat)
import closure_2 from "noop" /* 19 */;
import { hasPermission } from "GuildRoleRecordTypeTag" /* 1986 */;
import closure_4 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_5 from "createGuildRecordFromRust" /* 1909 */;
import { GuildRoleSubscriptionFormat as closure_6 } from "MAX_SUBSCRIPTION_TIERS" /* 14801 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores[6]);
  const items = [closure_5, closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = closure_1_5.getGuild(closure_0);
    let everyoneRole;
    if (null != guild) {
      everyoneRole = closure_1_4.getEveryoneRole(guild);
    }
    return everyoneRole;
  });
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      if (!closure_1_3(tmp, closure_1_7.VIEW_CHANNEL)) {
        let SOME_CHANNELS = closure_1_6.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = closure_1_6.SOME_CHANNELS;
  }, items1);
  obj = { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
  return obj;
};