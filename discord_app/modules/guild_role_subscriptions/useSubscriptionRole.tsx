// discord_app/modules/guild_role_subscriptions/useSubscriptionRole.tsx
import closure_2 from "createGuildRoleRecordFromRust" /* 1983 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useFetchListingsForGuild } from "GuildRoleSubscriptionsHooks.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  dependencyMap = _useFetchListingsForGuild.useSubscriptionListing(editStateId);
  const obj = _useFetchListingsForGuild;
  const items = [closure_2];
  return _initialize.useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = closure_1_2.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};