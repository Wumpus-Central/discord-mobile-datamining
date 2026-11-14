// === Module 10112: BadgeDirectorySeenStore ===

// Module 10112 (BadgeDirectorySeenStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import BadgeUtils from "BadgeUtils" /* 10113 */;

require = fn;
let obj = { seenBadgeIndicatorIds: new Set() };
let obj2 = obj;
const PersistedStore = initializeDefault.PersistedStore;
class BadgeDirectorySeenStore extends PersistedStore {
}
const prototype = BadgeDirectorySeenStore.prototype;
prototype["initialize"] = function initialize(seenBadgeIndicatorIds) {
  let prop;
  if (seenBadgeIndicatorIds != null) {
    prop = seenBadgeIndicatorIds.seenBadgeIndicatorIds;
  }
  if (prop == null) {
    prop = [];
  }
  const obj = { seenBadgeIndicatorIds: new Set(prop) };
};
prototype["getState"] = function getState() {
  return { seenBadgeIndicatorIds: Array.from(obj2.seenBadgeIndicatorIds) };
};
prototype["getSeenBadgeIndicators"] = function getSeenBadgeIndicators() {
  return obj2.seenBadgeIndicatorIds;
};
BadgeDirectorySeenStore.displayName = "BadgeDirectorySeenStore";
BadgeDirectorySeenStore.persistKey = "BadgeDirectorySeenStore";
obj2 = {
  BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function handleMarkBadgeIndicatorSeen(badgeId) {
    badgeId = badgeId.badgeId;
    const seenBadgeIndicatorIds = obj2.seenBadgeIndicatorIds;
    if (!seenBadgeIndicatorIds.has(badgeId)) {
      const obj = {};
      const merged = Object.assign(obj2);
      const _Set = Set;
      items = [];
      items[HermesBuiltin.arraySpread(obj2.seenBadgeIndicatorIds, 0)] = badgeId;
      const set = new Set(items);
      obj.seenBadgeIndicatorIds = set;
    }
    return false;
  },
  BADGE_ACK_SUCCESS: function handleBadgeAckSuccess(badgeId) {
    badgeId = badgeId.badgeId;
    let isBetaBadgeIdResult = BadgeUtils.isBetaBadgeId(badgeId);
    if (isBetaBadgeIdResult) {
      const seenBadgeIndicatorIds = obj2.seenBadgeIndicatorIds;
      if (!seenBadgeIndicatorIds.has(badgeId)) {
        obj2 = {};
        const merged = Object.assign(obj2);
        const _Set = Set;
        items = [];
        items[HermesBuiltin.arraySpread(obj2.seenBadgeIndicatorIds, 0)] = badgeId;
        const set = new Set(items);
        obj2.seenBadgeIndicatorIds = set;
      }
      isBetaBadgeIdResult = flag;
    }
    return isBetaBadgeIdResult;
  }
};
const badgeDirectorySeenStore = new BadgeDirectorySeenStore(DispatcherDefault, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectorySeenStore.tsx");

export default badgeDirectorySeenStore;