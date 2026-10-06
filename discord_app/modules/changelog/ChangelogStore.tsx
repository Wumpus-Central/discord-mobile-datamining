// === Module 4910: ChangelogStore ===

// Module 4910 (ChangelogStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettings from "UserSettings" /* 2028 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChangelogConstants from "ChangelogConstants" /* 2102 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function handleUserSettingsProtoStoreChange() {
  const LastReceivedChangelogId = UserSettings.LastReceivedChangelogId;
  const setting = LastReceivedChangelogId.getSetting();
}
({ AssetType: closure_4, ChangelogLoadState: hasOwnProperty } = ChangelogConstants);
const metroRequire = {};
const metroImportDefault = {};
let c8 = null;
let id = null;
let c10 = null;
const lastChangeLogDate = "lastChangeLogDate";
const lastSeenChangelogId = null;
let date = null;
let set = new Set();
const Store = get_initializedDefault.Store;
class ChangelogStore extends Store {
  initialize() {
    this.waitFor(LocaleStore, UserSettingsProtoStore);
    const items = [LocaleStore];
    this.syncWith(items, () => true);
    const items1 = [UserSettingsProtoStore];
    this.syncWith(items1, handleUserSettingsProtoStoreChange);
    const Storage = Storage3.Storage;
    const value = Storage.get(lastChangeLogDate);
    if (null != value) {
      try {
        const _Date = Date;
        const self = this;
        const self2 = this;
        new Date(value);
      } catch (err) {
        const Storage2 = Storage3.Storage;
        Storage2.remove(lastChangeLogDate);
      }
    }
  }
  getChangelog(id, stateFromStores) {
    let tmp2;
    if (closure_6[id] != null) {
      tmp2 = tmp[stateFromStores];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }
  latestChangelogId() {
    return c8;
  }
  getChangelogLoadStatus(id, arg1) {
    let NOT_LOADED;
    if (loadedChangelogs[id] != null) {
      NOT_LOADED = tmp[arg1];
    }
    if (NOT_LOADED == null) {
      NOT_LOADED = hasOwnProperty.NOT_LOADED;
    }
    return NOT_LOADED;
  }
  hasLoadedConfig() {
    return null != c10;
  }
  getConfig() {
    return c10;
  }
  overrideId() {
    return id;
  }
  lastSeenChangelogId() {
    return lastSeenChangelogId;
  }
  lastSeenChangelogDate() {
    return date;
  }
  getStateForDebugging() {
    return { changelogConfig, loadedChangelogs, lastSeenChangelogId, lastSeenChangelogDate: date };
  }
  isLocked() {
    return set.size > 0;
  }
}
const prototype = ChangelogStore.prototype;
ChangelogStore.displayName = "ChangelogStore";
let obj = {
  CHANGE_LOG_LOCK: function handleChangeLogLock(key) {
    if (set.has(key.key)) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      set.add(key.key);
    }
  },
  CHANGE_LOG_UNLOCK: function handleChangeLogUnlock(key) {
    if (set.has(key.key)) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      set.delete(key.key);
    } else {
      return false;
    }
  },
  CHANGE_LOG_SET_CONFIG: function handleConfig(arg0) {
    let c10;
    ({ latestChangelogId: c8, config: c10 } = arg0);
  },
  CHANGE_LOG_FETCH_SUCCESS: function handleChangelogFetch(arg0) {
    let changelog;
    ({ id, changelog } = arg0);
    if (null == closure_6[id]) {
      closure_6[id] = {};
    }
    const obj = { id, date: changelog.date, body: changelog.content, revision: 1, locale: changelog.locale };
    let str = "image";
    const locale = changelog.locale;
    const tmp2 = closure_6[id];
    if (changelog.asset_type === constants.YOUTUBE_VIDEO_ID) {
      str = "youtube_video_id";
    }
    obj[str] = changelog.asset;
    tmp2[locale] = obj;
    if (null == loadedChangelogs[id]) {
      loadedChangelogs[id] = {};
    }
    loadedChangelogs[id][changelog.locale] = hasOwnProperty.LOADED_SUCCESS;
  },
  CHANGE_LOG_FETCH_FAILED: function handleChangelogFetchFailed(arg0) {
    let locale;
    ({ id, locale } = arg0);
    if (null != closure_6[id]) {
      if (null != closure_6[id][locale]) {
        return false;
      }
    }
    if (null == loadedChangelogs[id]) {
      loadedChangelogs[id] = {};
    }
    loadedChangelogs[id][locale] = hasOwnProperty.LOADED_FAILURE;
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
};
const changelogStore = new ChangelogStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/changelog/ChangelogStore.tsx");

export default changelogStore;