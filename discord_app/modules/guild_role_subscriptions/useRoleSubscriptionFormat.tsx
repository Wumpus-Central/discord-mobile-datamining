// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
import noop from "../../../_runtime/00019_noop.js";
import { hasPermission } from "../../records/GuildRoleRecord.tsx";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { GuildRoleSubscriptionFormat as closure_6 } from "GuildRoleSubscriptionsConstants.tsx";
import { Permissions } from "../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

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
      if (!hasPermission(tmp, Permissions.VIEW_CHANNEL)) {
        let SOME_CHANNELS = closure_1_6.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = closure_1_6.SOME_CHANNELS;
  }, items1);
  obj = { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
  return obj;
};