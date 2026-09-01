// discord_app/modules/connections/GuildRoleConnectionEligibilityStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

const map = new Map();
const Store = initializeDefault.Store;
class GuildRoleConnectionEligibilityStore extends Store {}
GuildRoleConnectionEligibilityStore.prototype["getGuildRoleConnectionEligibility"] =
  function getGuildRoleConnectionEligibility(roleId) {
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
  },
});
let result = require("set").fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default guildRoleConnectionEligibilityStore;
