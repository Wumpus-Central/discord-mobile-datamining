// discord_app/modules/guild_mod_dash_member_safety/BulkBanStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_0 from "../../stores/AuthenticationStore.tsx";
import set from "../../../_runtime/00002_set.js";

let set = new Set();
const set1 = new Set();
const Store = initializeDefault.Store;
class BulkBanStore extends Store {}
const prototype = BulkBanStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["hasPendingBulkBan"] = function hasPendingBulkBan(arg0) {
  return set.has(arg0);
};
prototype["consumeCompletedBeforeStarted"] = function consumeCompletedBeforeStarted(closure_0, id) {
  return set1.delete("" + closure_0 + ":" + id);
};
BulkBanStore.displayName = "BulkBanStore";
const bulkBanStore = new BulkBanStore(dispatcherDefault, {
  GUILD_BULK_BAN_STARTED: function handleBulkBanStarted(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_BULK_BAN_FAILED: function handleBulkBanFailed(guildId) {
    if (set.has(guildId.guildId)) {
      obj.delete(guildId.guildId);
    } else {
      return false;
    }
    obj = set;
  },
  GUILD_BULK_BAN_UPDATE: function handleBulkBanUpdate(guildId) {
    if (set.has(guildId.guildId)) {
      obj.delete(guildId.guildId);
    } else {
      const _HermesInternal = HermesInternal;
      set1.add("" + guildId.guildId + ":" + id.getId());
      return false;
    }
    obj = set;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    set1.clear();
  },
});
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkBanStore.tsx");

export default bulkBanStore;
