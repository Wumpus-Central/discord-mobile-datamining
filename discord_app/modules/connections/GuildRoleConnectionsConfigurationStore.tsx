// === Module 17611: GuildRoleConnectionsConfigurationStore ===

// Module 17611 (GuildRoleConnectionsConfigurationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildStore from "GuildStore" /* 1979 */;

const map = new Map();
const Store = initializeDefault.Store;
class GuildRoleConnectionsConfigurationStore extends Store {
}
const prototype = GuildRoleConnectionsConfigurationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore);
};
prototype["getGuildRoleConnectionsConfiguration"] = function getGuildRoleConnectionsConfiguration(arg0) {
  return map.get(arg0);
};
GuildRoleConnectionsConfigurationStore.displayName = "GuildRoleConnectionsConfigurationStore";
const guildRoleConnectionsConfigurationStore = new GuildRoleConnectionsConfigurationStore(DispatcherDefault, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default guildRoleConnectionsConfigurationStore;