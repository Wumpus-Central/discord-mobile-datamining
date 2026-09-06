// === Module 4574: ChangelogStore ===

// Module 4574 (ChangelogStore)
import initializeDefault from "initialize" /* 504 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserSettings from "UserSettings" /* 1935 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

require = fn;
function handleUserSettingsProtoStoreChange() {
  const LastReceivedChangelogId = UserSettings.LastReceivedChangelogId;
  const setting = LastReceivedChangelogId.getSetting();
}
const ChangelogConstants = fn(2010);
({ AssetType: closure_4, ChangelogLoadState: hasOwnProperty } = ChangelogConstants);
const dependencyMap = {};
const loadedChangelogs = {};
let c8 = null;
let id = null;
let c10 = null;
const lastChangeLogDate = "lastChangeLogDate";
const lastSeenChangelogId = null;
let set = new Set();
const Store = initializeDefault.Store;
class ChangelogStore extends Store {
}
const prototype = ChangelogStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(LocaleStore, UserSettingsProtoStore);
  const items = [LocaleStore];
  this.syncWith(items, () => true);
  const items1 = [UserSettingsProtoStore];
  this.syncWith(items1, handleUserSettingsProtoStoreChange);
  const Storage = Storage3.Storage;
  value = Storage.get(lastChangeLogDate);
  if (null != value) {
    try {
      const _Date = Date;
      date = new Date(value);
    } catch (err) {
      const Storage2 = tmp3(tmp2[3]).Storage;
      Storage2.remove(tmp4);
    }
  }
};
prototype["getChangelog"] = function getChangelog(arg0, stateFromStores) {
  let tmp2;
  if (dependencyMap[arg0] != null) {
    tmp2 = tmp[stateFromStores];
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  return tmp2;
};
prototype["latestChangelogId"] = function latestChangelogId() {
  return c8;
};
prototype["getChangelogLoadStatus"] = function getChangelogLoadStatus(arg0, arg1) {
  let NOT_LOADED;
  if (loadedChangelogs[arg0] != null) {
    NOT_LOADED = tmp[arg1];
  }
  if (NOT_LOADED == null) {
    NOT_LOADED = constants2.NOT_LOADED;
  }
  return NOT_LOADED;
};
prototype["hasLoadedConfig"] = function hasLoadedConfig() {
  return null != c10;
};
prototype["getConfig"] = function getConfig() {
  return c10;
};
prototype["overrideId"] = function overrideId() {
  return id;
};
prototype["lastSeenChangelogId"] = function lastSeenChangelogId() {
  return closure_12;
};
prototype["lastSeenChangelogDate"] = function lastSeenChangelogDate() {
  return date;
};
prototype["getStateForDebugging"] = function getStateForDebugging() {
  return { changelogConfig, loadedChangelogs, lastSeenChangelogId, lastSeenChangelogDate: date };
};
prototype["isLocked"] = function isLocked() {
  return set.size > 0;
};
ChangelogStore.displayName = "ChangelogStore";
const changelogStore = new ChangelogStore(DispatcherDefault, {
  CHANGE_LOG_LOCK: function handleChangeLogLock(key) {
    if (set.has(key.key)) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.add(key);
    }
  },
  CHANGE_LOG_UNLOCK: function handleChangeLogUnlock(key) {
    if (set.has(key.key)) {
      const _Set = Set;
      set = new Set(set);
      set.delete(key);
    } else {
      return false;
    }
  },
  CHANGE_LOG_SET_CONFIG: function handleConfig(arg0) {
    ({ latestChangelogId: c8, config: c10 } = arg0);
  },
  CHANGE_LOG_FETCH_SUCCESS: function handleChangelogFetch(arg0) {
    ({ id, changelog } = arg0);
    if (null == dependencyMap[id]) {
      tmp[id] = {};
    }
    const obj = { id, date: changelog.date, body: changelog.content, revision: 1, locale: changelog.locale };
    let str = "image";
    if (changelog.asset_type === constants.YOUTUBE_VIDEO_ID) {
      str = "youtube_video_id";
    }
    obj[str] = changelog.asset;
    dependencyMap[id][changelog.locale] = obj;
    if (null == loadedChangelogs[id]) {
      tmp2[id] = {};
    }
    loadedChangelogs[id][changelog.locale] = constants2.LOADED_SUCCESS;
  },
  CHANGE_LOG_FETCH_FAILED: function handleChangelogFetchFailed(arg0) {
    ({ id, locale } = arg0);
    if (null != dependencyMap[id]) {
      if (null != dependencyMap[id][locale]) {
        return false;
      }
    }
    if (null == loadedChangelogs[id]) {
      tmp[id] = {};
    }
    loadedChangelogs[id][locale] = constants2.LOADED_FAILURE;
  },
  CHANGE_LOG_SET_OVERRIDE: function handleChangelogSetOverride(id) {
    id = id.id;
  },
  CHANGE_LOG_MARK_SEEN: function handleDismiss(changelogDate) {
    changelogDate = changelogDate.changelogDate;
    date = new Date(changelogDate);
    const Storage = Storage3.Storage;
    const result = Storage.set(lastChangeLogDate, changelogDate);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/changelog/ChangelogStore.tsx");

export default changelogStore;