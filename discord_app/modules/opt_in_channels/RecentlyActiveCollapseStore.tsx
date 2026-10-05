// discord_app/modules/opt_in_channels/RecentlyActiveCollapseStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const recentlyActiveCollapseStore = new RecentlyActiveCollapseStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/opt_in_channels/RecentlyActiveCollapseStore.tsx");

export default recentlyActiveCollapseStore;
