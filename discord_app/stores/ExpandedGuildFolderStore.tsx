// discord_app/stores/ExpandedGuildFolderStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import closure_0 from "../modules/user_settings/UserSettingsProtoStore.tsx";
import set from "../../_runtime/00002_set.js";

let set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class ExpandedGuildFolderStore extends PersistedStore {
}
const prototype = ExpandedGuildFolderStore.prototype;
prototype["initialize"] = function initialize(expandedFolders) {
  if (null != expandedFolders) {
    const _Set = Set;
    set = new Set(expandedFolders.expandedFolders);
  }
  this.waitFor(closure_0);
};
prototype["getState"] = function getState() {
  return { expandedFolders: Array.from(set) };
};
prototype["getExpandedFolders"] = function getExpandedFolders() {
  return set;
};
prototype["isFolderExpanded"] = function isFolderExpanded(folderId) {
  return set.has(folderId);
};
ExpandedGuildFolderStore.displayName = "ExpandedGuildFolderStore";
ExpandedGuildFolderStore.persistKey = "ExpandedGuildFolderStore";
const expandedGuildFolderStore = new ExpandedGuildFolderStore(dispatcherDefault, {
  TOGGLE_GUILD_FOLDER_EXPAND: function toggleFolderExpand(folderId) {
    folderId = folderId.folderId;
    set = new Set(set);
    if (set.has(folderId)) {
      obj2.delete(folderId);
    } else {
      obj2.add(folderId);
    }
  },
  SET_GUILD_FOLDER_EXPANDED: function setFolderExpanded(folderId) {
    folderId = folderId.folderId;
    set = new Set(set);
    if (folderId.expanded) {
      set.add(folderId);
    } else if (set.has(folderId)) {
      set.delete(folderId);
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleSettingsUpdate() {
    guildFolders = guildFolders.getGuildFolders();
    if (null == guildFolders) {
      return false;
    } else {
      function _loop(iter) {
        guildFolders = iter;
        if (!guildFolders.some((folderId) => folderId.folderId === closure_0)) {
          const _Set = Set;
          set = new Set(set);
          set.delete(iter);
          c1 = true;
        }
      }
      const iter = false[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
      return false;
    }
  },
  GUILD_FOLDER_COLLAPSE: function handleCollapseAll() {
    if (0 === set.size) {
      return false;
    } else {
      const _Set = Set;
      set = new Set();
    }
  }
});
const result = set.fileFinishedImporting("stores/ExpandedGuildFolderStore.tsx");

export default expandedGuildFolderStore;