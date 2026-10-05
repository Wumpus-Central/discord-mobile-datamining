// discord_app/modules/connections/GuildRoleConnectionsConfigurationStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const map = new Map();
const Store = get_initializedDefault.Store;
class GuildRoleConnectionsConfigurationStore extends Store {
  initialize() {
    this.waitFor(GuildStore);
  }
  getGuildRoleConnectionsConfiguration(arg0) {
    return map.get(arg0);
  }
}
const prototype = GuildRoleConnectionsConfigurationStore.prototype;
GuildRoleConnectionsConfigurationStore.displayName = "GuildRoleConnectionsConfigurationStore";
const obj = {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  },
};
const guildRoleConnectionsConfigurationStore = new GuildRoleConnectionsConfigurationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default guildRoleConnectionsConfigurationStore;
