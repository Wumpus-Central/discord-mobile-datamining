// === Module 14773: useSubscriptionRole ===

// Module 14773 (useSubscriptionRole)
import closure_2 from "createGuildRoleRecordFromRust" /* 1985 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  dependencyMap = _require(14756).useSubscriptionListing(editStateId);
  const obj = _require(14756);
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