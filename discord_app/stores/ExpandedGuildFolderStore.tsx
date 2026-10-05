// discord_app/stores/ExpandedGuildFolderStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let c1;

let set = new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class ExpandedGuildFolderStore extends PersistedStore {
  initialize(expandedFolders) {
    if (null != expandedFolders) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set(expandedFolders.expandedFolders);
    }
    this.waitFor(UserSettingsProtoStore);
  }
  getState() {
    const obj = { expandedFolders: Array.from(set) };
    return obj;
  }
  getExpandedFolders() {
    return set;
  }
  isFolderExpanded(PENDING_JOIN_REQUESTS_FOLDER) {
    return set.has(PENDING_JOIN_REQUESTS_FOLDER);
  }
}
const prototype = ExpandedGuildFolderStore.prototype;
ExpandedGuildFolderStore.displayName = "ExpandedGuildFolderStore";
ExpandedGuildFolderStore.persistKey = "ExpandedGuildFolderStore";
let obj = {
  TOGGLE_GUILD_FOLDER_EXPAND: function toggleFolderExpand(folderId) {
    folderId = folderId.folderId;
    set = new Set(set);
    if (set.has(folderId)) {
      set.delete(folderId);
    } else {
      set.add(folderId);
    }
  },
  SET_GUILD_FOLDER_EXPANDED: function setFolderExpanded(folderId) {
    folderId = folderId.folderId;
    const expanded = folderId.expanded;
    set = new Set(set);
    if (expanded) {
      set.add(folderId);
    } else if (set.has(folderId)) {
      set.delete(folderId);
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleSettingsUpdate() {
    let guildFolders;
    guildFolders = guildFolders.getGuildFolders();
    if (null == guildFolders) {
      return false;
    } else {
      set = false;
      function _loop(iter) {
        let closure_0 = iter;
        if (!guildFolders.some((folderId) => folderId.folderId === closure_0)) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(set);
          set.delete(iter);
          c1 = true;
        }
      }
      const iter = set[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
      return set;
    }
  },
  GUILD_FOLDER_COLLAPSE: function handleCollapseAll() {
    if (0 === set.size) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
  },
};
const expandedGuildFolderStore = new ExpandedGuildFolderStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ExpandedGuildFolderStore.tsx");

export default expandedGuildFolderStore;
