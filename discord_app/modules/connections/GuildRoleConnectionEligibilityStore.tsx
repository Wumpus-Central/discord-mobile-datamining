// === Module 11024: map ===

// Module 11024 (map)
import { Store } from "initialize";

const map = new Map();
class GuildRoleConnectionEligibilityStore extends Store {
}
GuildRoleConnectionEligibilityStore.prototype["getGuildRoleConnectionEligibility"] = function getGuildRoleConnectionEligibility(roleId) {
  let value;
  if (null != roleId) {
    value = map.get(roleId);
  }
  return value;
};
GuildRoleConnectionEligibilityStore.displayName = "GuildRoleConnectionEligibilityStore";
const guildRoleConnectionEligibilityStore = new GuildRoleConnectionEligibilityStore(require("dispatcher"), {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  }
});
let result = require("set").fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default guildRoleConnectionEligibilityStore;