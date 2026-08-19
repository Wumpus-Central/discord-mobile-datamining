// === Module 5275: set ===

// Module 5275 (set)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class RecentlyActiveCollapseStore extends PersistedStore {
}
const prototype = RecentlyActiveCollapseStore.prototype;
prototype["initialize"] = function initialize(guilds) {
  set.clear();
  if (guilds != null) {
    guilds = guilds.guilds;
    const item = guilds.forEach((item, index) => set.add(item));
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
const recentlyActiveCollapseStore = new RecentlyActiveCollapseStore(dispatcherDefault, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function handleSetRecentlyActiveCollapsed(guildId) {
    guildId = guildId.guildId;
    if (guildId.collapsed) {
      set.add(guildId);
    } else {
      set.delete(guildId);
    }
  }
});
const result = require("obj132").fileFinishedImporting("modules/opt_in_channels/RecentlyActiveCollapseStore.tsx");

export default recentlyActiveCollapseStore;