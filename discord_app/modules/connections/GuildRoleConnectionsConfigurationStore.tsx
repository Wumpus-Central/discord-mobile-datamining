// === Module 16832: map ===

// Module 16832 (map)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

const map = new Map();
const Store = initializeDefault.Store;
class GuildRoleConnectionsConfigurationStore extends Store {
}
const prototype = GuildRoleConnectionsConfigurationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["getGuildRoleConnectionsConfiguration"] = function getGuildRoleConnectionsConfiguration(arg0) {
  return map.get(arg0);
};
GuildRoleConnectionsConfigurationStore.displayName = "GuildRoleConnectionsConfigurationStore";
const guildRoleConnectionsConfigurationStore = new GuildRoleConnectionsConfigurationStore(dispatcherDefault, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  }
});
let result = require("obj132").fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default guildRoleConnectionsConfigurationStore;