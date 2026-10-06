// === Module 17857: GuildConfigGatesStore ===

// Module 17857 (GuildConfigGatesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

const React = {};
const Store = get_initializedDefault.Store;
class GuildConfigGatesStore extends Store {
  hasLoaded(arg0) {
    return null != closure_0[arg0];
  }
  getGates(arg0) {
    let obj = closure_0[arg0];
    if (obj == null) {
      obj = { guildVerificationRoleEnabled: false, applicationIdentityLinkedRolesEnabled: false };
    }
    return obj;
  }
}
const prototype = GuildConfigGatesStore.prototype;
GuildConfigGatesStore.displayName = "GuildConfigGatesStore";
let obj = {
  GUILD_CONFIG_GATES_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    closure_0[guildId.guildId] = { guildVerificationRoleEnabled: guildId.guildVerificationRoleEnabled, applicationIdentityLinkedRolesEnabled: guildId.applicationIdentityLinkedRolesEnabled };
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
  }
};
const guildConfigGatesStore = new GuildConfigGatesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_config_gates/GuildConfigGatesStore.tsx");

export default guildConfigGatesStore;