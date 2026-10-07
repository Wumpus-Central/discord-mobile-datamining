// discord_app/modules/badges/BadgeDirectorySeenStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let obj = { seenBadgeIndicatorIds: new Set() };
const PersistedStore = initializeDefault.PersistedStore;
class BadgeDirectorySeenStore extends PersistedStore {}
const prototype = BadgeDirectorySeenStore.prototype;
prototype["initialize"] = function initialize(seenBadgeIndicatorIds) {
  let prop;
  if (seenBadgeIndicatorIds != null) {
    prop = seenBadgeIndicatorIds.seenBadgeIndicatorIds;
  }
  if (prop == null) {
    prop = [];
  }
  obj = { seenBadgeIndicatorIds: new Set(prop) };
};
prototype["getState"] = function getState() {
  obj = { seenBadgeIndicatorIds: Array.from(obj.seenBadgeIndicatorIds) };
  return obj;
};
prototype["getSeenBadgeIndicators"] = function getSeenBadgeIndicators() {
  return obj.seenBadgeIndicatorIds;
};
BadgeDirectorySeenStore.displayName = "BadgeDirectorySeenStore";
BadgeDirectorySeenStore.persistKey = "BadgeDirectorySeenStore";
const badgeDirectorySeenStore = new BadgeDirectorySeenStore(DispatcherDefault, {
  BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function handleMarkBadgeIndicatorSeen(badgeId) {
    badgeId = badgeId.badgeId;
    const seenBadgeIndicatorIds = obj.seenBadgeIndicatorIds;
    if (seenBadgeIndicatorIds.has(badgeId)) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(obj.seenBadgeIndicatorIds, 0)] = badgeId;
      const set = new Set(items);
      obj.seenBadgeIndicatorIds = set;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectorySeenStore.tsx");

export default badgeDirectorySeenStore;
