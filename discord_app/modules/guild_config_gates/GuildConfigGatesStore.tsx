// === Module 16861: hasLoaded ===

// Module 16861 (hasLoaded)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = {};
const Store = initializeDefault.Store;
class GuildConfigGatesStore extends Store {
}
const prototype = GuildConfigGatesStore.prototype;
prototype["hasLoaded"] = function hasLoaded(arg0) {
  return null != dependencyMap[arg0];
};
prototype["getGates"] = function getGates(arg0) {
  let obj = dependencyMap[arg0];
  if (obj == null) {
    obj = { guildVerificationRoleEnabled: false, applicationIdentityLinkedRolesEnabled: false };
  }
  return obj;
};
GuildConfigGatesStore.displayName = "GuildConfigGatesStore";
const guildConfigGatesStore = new GuildConfigGatesStore(dispatcherDefault, {
  GUILD_CONFIG_GATES_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    closure_0[guildId.guildId] = { guildVerificationRoleEnabled: guildId.guildVerificationRoleEnabled, applicationIdentityLinkedRolesEnabled: guildId.applicationIdentityLinkedRolesEnabled };
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
  }
});
const result = require("obj132").fileFinishedImporting("modules/guild_config_gates/GuildConfigGatesStore.tsx");

export default guildConfigGatesStore;