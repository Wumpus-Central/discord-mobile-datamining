// === Module 5789: set ===

// Module 5789 (set)
import { PersistedStore } from "initialize";
import set from "set";

let set = new Set();
class RecentlyActiveCollapseStore extends PersistedStore {
}
const prototype = RecentlyActiveCollapseStore.prototype;
prototype["initialize"] = function initialize(guilds) {
  set.clear();
  if (guilds != null) {
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => set.add(arg0));
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
const recentlyActiveCollapseStore = new RecentlyActiveCollapseStore(require("dispatcher"), {
  SET_RECENTLY_ACTIVE_COLLAPSED: function handleSetRecentlyActiveCollapsed(guildId) {
    guildId = guildId.guildId;
    if (guildId.collapsed) {
      obj.add(guildId);
    } else {
      obj.delete(guildId);
    }
  }
});
const result = set.fileFinishedImporting("modules/opt_in_channels/RecentlyActiveCollapseStore.tsx");

export default recentlyActiveCollapseStore;