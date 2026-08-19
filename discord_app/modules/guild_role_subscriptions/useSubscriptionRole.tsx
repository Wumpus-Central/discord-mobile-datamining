// === Module 14575: useSubscriptionRole ===

// Module 14575 (useSubscriptionRole)
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  dependencyMap = _require(14558).useSubscriptionListing(editStateId);
  const obj = _require(14558);
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = closure_1_2.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};