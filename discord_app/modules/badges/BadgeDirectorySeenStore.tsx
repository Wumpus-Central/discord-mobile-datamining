// === Module 10891: BadgeDirectorySeenStore ===

// Module 10891 (BadgeDirectorySeenStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let set;
let obj = { seenBadgeIndicatorIds: set };
set = new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class BadgeDirectorySeenStore extends PersistedStore {
  initialize(seenBadgeIndicatorIds) {
    let _Set1;
    let prop;
    const _Set = Set;
    if (seenBadgeIndicatorIds != null) {
      prop = seenBadgeIndicatorIds.seenBadgeIndicatorIds;
    }
    if (prop == null) {
      prop = [];
    }
    obj = { seenBadgeIndicatorIds: _Set1 };
    _Set1 = new _Set(prop);
  }
  getState() {
    obj = { seenBadgeIndicatorIds: Array.from(obj.seenBadgeIndicatorIds) };
    return obj;
  }
  getSeenBadgeIndicators() {
    return obj.seenBadgeIndicatorIds;
  }
}
const prototype = BadgeDirectorySeenStore.prototype;
BadgeDirectorySeenStore.displayName = "BadgeDirectorySeenStore";
BadgeDirectorySeenStore.persistKey = "BadgeDirectorySeenStore";
const obj2 = {
  BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function handleMarkBadgeIndicatorSeen(badgeId) {
    badgeId = badgeId.badgeId;
    const seenBadgeIndicatorIds = obj.seenBadgeIndicatorIds;
    if (seenBadgeIndicatorIds.has(badgeId)) {
      return false;
    } else {
      obj = { seenBadgeIndicatorIds: set };
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, obj.seenBadgeIndicatorIds, 0)] = badgeId;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
  }
};
const badgeDirectorySeenStore = new BadgeDirectorySeenStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectorySeenStore.tsx");

export default badgeDirectorySeenStore;