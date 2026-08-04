// discord_app/modules/guild_mod_dash_member_safety/BulkBanStore.tsx
import fetchFingerprint from "fetchFingerprint";
import { Store } from "initialize";
import set from "dispatcher";

let set = new Set();
const set1 = new Set();
class BulkBanStore extends Store {
}
const prototype = BulkBanStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint);
};
prototype["hasPendingBulkBan"] = function hasPendingBulkBan(arg0) {
  return set.has(arg0);
};
prototype["consumeCompletedBeforeStarted"] = function consumeCompletedBeforeStarted(fetchFingerprint, id) {
  return set1.delete("" + fetchFingerprint + ":" + id);
};
BulkBanStore.displayName = "BulkBanStore";
const bulkBanStore = new BulkBanStore(require("dispatcher"), {
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
  }
});
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkBanStore.tsx");

export default bulkBanStore;