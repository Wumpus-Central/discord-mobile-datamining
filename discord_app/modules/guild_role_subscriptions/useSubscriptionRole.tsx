// discord_app/modules/guild_role_subscriptions/useSubscriptionRole.tsx
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  _require = arg0;
  dependencyMap = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(editStateId);
  const obj = require("GuildRoleSubscriptionsHooks");
  const items = [GuildRoleStore];
  return require("initialize").useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = GuildRoleStore.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
}
