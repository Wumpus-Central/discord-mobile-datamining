// discord_app/modules/connections/GuildRoleConnectionEligibilityStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const map = new Map();
const Store = get_initializedDefault.Store;
class GuildRoleConnectionEligibilityStore extends Store {
  getGuildRoleConnectionEligibility(roleId) {
    let value;
    if (null != roleId) {
      value = map.get(roleId);
    }
    return value;
  }
}
const prototype = GuildRoleConnectionEligibilityStore.prototype;
GuildRoleConnectionEligibilityStore.displayName = "GuildRoleConnectionEligibilityStore";
const obj = {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  },
};
const guildRoleConnectionEligibilityStore = new GuildRoleConnectionEligibilityStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default guildRoleConnectionEligibilityStore;
