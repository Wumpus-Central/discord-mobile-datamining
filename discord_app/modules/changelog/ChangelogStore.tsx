// discord_app/modules/changelog/ChangelogStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import _getSystemLocale from "../user_settings/LocaleStore.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import CHANGELOG_MODAL_KEY from "ChangelogConstants.tsx";

require = fn;
function handleUserSettingsProtoStoreChange() {
  const LastReceivedChangelogId = explicitContentFromProto.LastReceivedChangelogId;
  const setting = LastReceivedChangelogId.getSetting();
}
({ AssetType: c4, ChangelogLoadState: c5 } = CHANGELOG_MODAL_KEY);
let closure_6 = {};
let closure_7 = {};
let c8 = null;
let c9 = null;
let c10 = null;
const lastChangeLogDate = "lastChangeLogDate";
let c12 = null;
let c13 = null;
let set = new Set();
const Store = initializeDefault.Store;
class ChangelogStore extends Store {
}
const prototype = ChangelogStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3);
  const items = [closure_2];
  this.syncWith(items, () => true);
  const items1 = [closure_3];
  this.syncWith(items1, handleUserSettingsProtoStoreChange);
  const Storage = Storage3.Storage;
  const value = Storage.get(lastChangeLogDate);
  if (null != value) {
    try {
      const _Date = Date;
      const date = new Date(value);
    } catch (err) {
      const Storage2 = tmp3(tmp2[3]).Storage;
      Storage2.remove(tmp4);
    }
  }
};
prototype["getChangelog"] = function getChangelog(closure_0, closure_1) {
  let tmp2;
  if (dependencyMap[closure_0] != null) {
    tmp2 = tmp[closure_1];
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  return tmp2;
};
prototype["latestChangelogId"] = function latestChangelogId() {
  return c8;
};
prototype["getChangelogLoadStatus"] = function getChangelogLoadStatus(closure_0, closure_1) {
  let NOT_LOADED;
  if (dependencyMap2[closure_0] != null) {
    NOT_LOADED = tmp[closure_1];
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
  return c9;
};
prototype["lastSeenChangelogId"] = function lastSeenChangelogId() {
  return c12;
};
prototype["lastSeenChangelogDate"] = function lastSeenChangelogDate() {
  return c13;
};
prototype["getStateForDebugging"] = function getStateForDebugging() {
  return { changelogConfig: c10, loadedChangelogs: closure_7, lastSeenChangelogId: c12, lastSeenChangelogDate: c13 };
};
prototype["isLocked"] = function isLocked() {
  return set.size > 0;
};
ChangelogStore.displayName = "ChangelogStore";
const changelogStore = new ChangelogStore(dispatcherDefault, {
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
      dependencyMap[id] = {};
    }
    const obj = { id, date: changelog.date, body: changelog.content, revision: 1, locale: changelog.locale };
    let str = "image";
    if (changelog.asset_type === constants.YOUTUBE_VIDEO_ID) {
      str = "youtube_video_id";
    }
    obj[str] = changelog.asset;
    dependencyMap[id][changelog.locale] = obj;
    if (null == dependencyMap2[id]) {
      dependencyMap2[id] = {};
    }
    dependencyMap2[id][changelog.locale] = constants2.LOADED_SUCCESS;
  },
  CHANGE_LOG_FETCH_FAILED: function handleChangelogFetchFailed(arg0) {
    ({ id, locale } = arg0);
    if (null != dependencyMap[id]) {
      if (null != dependencyMap[id][locale]) {
        return false;
      }
    }
    if (null == dependencyMap2[id]) {
      dependencyMap2[id] = {};
    }
    dependencyMap2[id][locale] = constants2.LOADED_FAILURE;
  },
  CHANGE_LOG_SET_OVERRIDE: function handleChangelogSetOverride(id) {
    id = id.id;
  },
  CHANGE_LOG_MARK_SEEN: function handleDismiss(changelogDate) {
    changelogDate = changelogDate.changelogDate;
    const date = new Date(changelogDate);
    const Storage = Storage3.Storage;
    const result = Storage.set(lastChangeLogDate, changelogDate);
  }
});
let result = require("obj132").fileFinishedImporting("modules/changelog/ChangelogStore.tsx");

export default changelogStore;