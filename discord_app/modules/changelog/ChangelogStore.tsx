// === Module 4266: handleUserSettingsProtoStoreChange ===

// Module 4266 (handleUserSettingsProtoStoreChange)
import _getSystemLocale from "_getSystemLocale";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import CHANGELOG_MODAL_KEY from "CHANGELOG_MODAL_KEY";
import { Store } from "initialize";
import set from "CHANGELOG_MODAL_KEY";

let c4;
let c5;
const require = arg1;
function handleUserSettingsProtoStoreChange() {
  const LastReceivedChangelogId = require(3928) /* explicitContentFromProto */.LastReceivedChangelogId;
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
class ChangelogStore extends Store {
}
const prototype = ChangelogStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(_getSystemLocale, handleConnectionClosedOrResumed);
  const items = [_getSystemLocale];
  this.syncWith(items, () => true);
  const items1 = [handleConnectionClosedOrResumed];
  this.syncWith(items1, handleUserSettingsProtoStoreChange);
  const Storage = require(595) /* Storage */.Storage;
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
prototype["getChangelog"] = function getChangelog(outer1_0, closure_1) {
  let tmp2;
  if (dependencyMap[outer1_0] != null) {
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
prototype["getChangelogLoadStatus"] = function getChangelogLoadStatus(arg0, closure_1) {
  let NOT_LOADED;
  if (dependencyMap2[arg0] != null) {
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
const changelogStore = new ChangelogStore(require("dispatcher"), {
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
    let c10;
    let c8;
    ({ latestChangelogId: c8, config: c10 } = arg0);
  },
  CHANGE_LOG_FETCH_SUCCESS: function handleChangelogFetch(arg0) {
    let changelog;
    let id;
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
    if (null == dependencyMap2[id]) {
      tmp2[id] = {};
    }
    dependencyMap2[id][changelog.locale] = constants2.LOADED_SUCCESS;
  },
  CHANGE_LOG_FETCH_FAILED: function handleChangelogFetchFailed(arg0) {
    let id;
    let locale;
    ({ id, locale } = arg0);
    if (null != dependencyMap[id]) {
      if (null != dependencyMap[id][locale]) {
        return false;
      }
    }
    if (null == dependencyMap2[id]) {
      tmp[id] = {};
    }
    dependencyMap2[id][locale] = constants2.LOADED_FAILURE;
  },
  CHANGE_LOG_SET_OVERRIDE: function handleChangelogSetOverride(id) {
    id = id.id;
  },
  CHANGE_LOG_MARK_SEEN: function handleDismiss(changelogDate) {
    changelogDate = changelogDate.changelogDate;
    const date = new Date(changelogDate);
    const Storage = require(595) /* Storage */.Storage;
    const result = Storage.set(lastChangeLogDate, changelogDate);
  }
});
let result = set.fileFinishedImporting("modules/changelog/ChangelogStore.tsx");

export default changelogStore;