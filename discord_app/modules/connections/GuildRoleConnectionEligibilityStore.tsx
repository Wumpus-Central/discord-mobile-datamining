// === Module 10999: map ===

// Module 10999 (map)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const map = new Map();
const Store = initializeDefault.Store;
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
const guildRoleConnectionEligibilityStore = new GuildRoleConnectionEligibilityStore(dispatcherDefault, {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  }
});
let result = require("obj132").fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default guildRoleConnectionEligibilityStore;