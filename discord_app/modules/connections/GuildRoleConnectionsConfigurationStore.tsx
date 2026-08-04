// discord_app/modules/connections/GuildRoleConnectionsConfigurationStore.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { Store } from "initialize";

const map = new Map();
class GuildRoleConnectionsConfigurationStore extends Store {
}
const prototype = GuildRoleConnectionsConfigurationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(createGuildRecordFromRust);
};
prototype["getGuildRoleConnectionsConfiguration"] = function getGuildRoleConnectionsConfiguration(arg0) {
  return map.get(arg0);
};
GuildRoleConnectionsConfigurationStore.displayName = "GuildRoleConnectionsConfigurationStore";
const guildRoleConnectionsConfigurationStore = new GuildRoleConnectionsConfigurationStore(require("dispatcher"), {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  }
});
let result = require("dispatcher").fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default guildRoleConnectionsConfigurationStore;