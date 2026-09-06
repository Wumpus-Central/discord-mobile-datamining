// === Module 11820: GuildRoleConnectionEligibilityStore ===

// Module 11820 (GuildRoleConnectionEligibilityStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const map = new Map();
const Store = initializeDefault.Store;
class GuildRoleConnectionEligibilityStore extends Store {
}
GuildRoleConnectionEligibilityStore.prototype["getGuildRoleConnectionEligibility"] = function getGuildRoleConnectionEligibility(roleId) {
  value = undefined;
  if (null != roleId) {
    value = map.get(roleId);
  }
  return value;
};
GuildRoleConnectionEligibilityStore.displayName = "GuildRoleConnectionEligibilityStore";
const guildRoleConnectionEligibilityStore = new GuildRoleConnectionEligibilityStore(DispatcherDefault, {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default guildRoleConnectionEligibilityStore;