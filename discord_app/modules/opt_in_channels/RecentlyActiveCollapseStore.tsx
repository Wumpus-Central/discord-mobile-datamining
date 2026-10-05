// === Module 7042: RecentlyActiveCollapseStore ===

// Module 7042 (RecentlyActiveCollapseStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const set = new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class RecentlyActiveCollapseStore extends PersistedStore {
  initialize(guilds) {
    set.clear();
    if (guilds != null) {
      guilds = guilds.guilds;
      const item = guilds.forEach((item) => set.add(item));
    }
  }
  isCollapsed(arg0) {
    return set.has(arg0);
  }
  getState() {
    return { guilds: set };
  }
}
const prototype = RecentlyActiveCollapseStore.prototype;
RecentlyActiveCollapseStore.displayName = "RecentlyActiveCollapseStore";
RecentlyActiveCollapseStore.persistKey = "RecentlyActiveCollapseStore";
const obj = {
  SET_RECENTLY_ACTIVE_COLLAPSED: function handleSetRecentlyActiveCollapsed(guildId) {
    guildId = guildId.guildId;
    if (guildId.collapsed) {
      set.add(guildId);
    } else {
      set.delete(guildId);
    }
  }
};
const recentlyActiveCollapseStore = new RecentlyActiveCollapseStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/opt_in_channels/RecentlyActiveCollapseStore.tsx");

export default recentlyActiveCollapseStore;