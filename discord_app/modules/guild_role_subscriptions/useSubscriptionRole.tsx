import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useFetchListingsForGuild } from "GuildRoleSubscriptionsHooks.tsx";
// discord_app/modules/guild_role_subscriptions/useSubscriptionRole.tsx
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  const dependencyMap = _useFetchListingsForGuild.useSubscriptionListing(editStateId);
  const obj = _useFetchListingsForGuild;
  const items = [createGuildRoleRecordFromRust];
  return _initialize.useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = outer1_2.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};