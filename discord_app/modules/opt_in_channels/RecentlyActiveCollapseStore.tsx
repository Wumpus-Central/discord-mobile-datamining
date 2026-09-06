// === Module 7531: RecentlyActiveCollapseStore ===

// Module 7531 (RecentlyActiveCollapseStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class RecentlyActiveCollapseStore extends PersistedStore {
}
const prototype = RecentlyActiveCollapseStore.prototype;
prototype["initialize"] = function initialize(guilds) {
  set.clear();
  if (guilds != null) {
    guilds = guilds.guilds;
    const item = guilds.forEach((item) => set.add(item));
  }
};
prototype["isCollapsed"] = function isCollapsed(arg0) {
  return set.has(arg0);
};
prototype["getState"] = function getState() {
  return { guilds: set };
};
RecentlyActiveCollapseStore.displayName = "RecentlyActiveCollapseStore";
RecentlyActiveCollapseStore.persistKey = "RecentlyActiveCollapseStore";
const recentlyActiveCollapseStore = new RecentlyActiveCollapseStore(DispatcherDefault, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function handleSetRecentlyActiveCollapsed(guildId) {
    guildId = guildId.guildId;
    if (guildId.collapsed) {
      set.add(guildId);
    } else {
      set.delete(guildId);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/opt_in_channels/RecentlyActiveCollapseStore.tsx");

export default recentlyActiveCollapseStore;