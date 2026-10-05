// discord_app/modules/guild_mod_dash_member_safety/BulkBanStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const set = new Set();
const set1 = new Set();
const Store = get_initializedDefault.Store;
class BulkBanStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  hasPendingBulkBan(arg0) {
    return set.has(arg0);
  }
  consumeCompletedBeforeStarted(arg0, id) {
    return set1.delete("" + arg0 + ":" + id);
  }
}
const prototype = BulkBanStore.prototype;
BulkBanStore.displayName = "BulkBanStore";
const obj = {
  GUILD_BULK_BAN_STARTED: function handleBulkBanStarted(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_BULK_BAN_FAILED: function handleBulkBanFailed(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      return false;
    }
  },
  GUILD_BULK_BAN_UPDATE: function handleBulkBanUpdate(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      const _HermesInternal = HermesInternal;
      set1.add("" + guildId.guildId + ":" + AuthenticationStore.getId());
      return false;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    set1.clear();
  },
};
const bulkBanStore = new BulkBanStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkBanStore.tsx");

export default bulkBanStore;
