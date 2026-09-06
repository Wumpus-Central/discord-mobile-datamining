// === Module 5521: BulkBanStore ===

// Module 5521 (BulkBanStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const set = new Set();
const set1 = new Set();
const Store = initializeDefault.Store;
class BulkBanStore extends Store {
}
const prototype = BulkBanStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
prototype["hasPendingBulkBan"] = function hasPendingBulkBan(arg0) {
  return set.has(arg0);
};
prototype["consumeCompletedBeforeStarted"] = function consumeCompletedBeforeStarted(arg0, id) {
  return set1.delete("" + arg0 + ":" + id);
};
BulkBanStore.displayName = "BulkBanStore";
const bulkBanStore = new BulkBanStore(DispatcherDefault, {
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
      set1.add("" + guildId.guildId + ":" + AuthenticationStore.getId());
      return false;
    }
    obj = set;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    set1.clear();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkBanStore.tsx");

export default bulkBanStore;