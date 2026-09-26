// discord_app/modules/badges/useBadgeDirectoryBadgeIndicators.tsx
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators.tsx";
import BadgeUtils from "BadgeUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import BadgeDirectorySeenStore from "BadgeDirectorySeenStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/useBadgeDirectoryBadgeIndicators.tsx");

export const NEW_INDICATOR_BADGE_IDS = fn(10659).BETA_BADGE_IDS;
export const isNewIndicatorBadgeId = function isNewIndicatorBadgeId(arg0) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  return BETA_BADGE_IDS.has(arg0);
};
export const dismissBadgeDirectoryBadgeIndicator = function dismissBadgeDirectoryBadgeIndicator(badgeId) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  if (BETA_BADGE_IDS.has(badgeId)) {
    const result = BadgeDirectoryActionCreators.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
    const tmpResult = BadgeDirectoryActionCreators;
  }
};
export const useBadgeDirectoryBadgeIndicators = function useBadgeDirectoryBadgeIndicators(badges) {
  badges = badges.badges;
  const enabled = badges.enabled;
  const items = [BadgeDirectorySeenStore];
  const stateFromStores = badges(enabled[4]).useStateFromStores(items, () =>
    seenBadgeIndicators.getSeenBadgeIndicators(),
  );
  const obj2 = { badgeIndicatorIds: null };
  const items1 = [badges, enabled, stateFromStores];
  obj2.badgeIndicatorIds = stateFromStores.useMemo(() => {
    const _Set = Set;
    if (enabled) {
      const found = badges.filter((badge_id) => {
        badge_id = badge_id.badge_id;
        const BETA_BADGE_IDS = badges(enabled[2]).BETA_BADGE_IDS;
        let hasItem = BETA_BADGE_IDS.has(badge_id);
        if (hasItem) {
          hasItem = !set.has(badge_id);
        }
        return hasItem;
      });
      let _Set1 = new _Set(found.map((badge_id) => badge_id.badge_id));
    } else {
      _Set1 = new _Set();
    }
    return _Set1;
  }, items1);
  return obj2;
};
export const useDismissBadgeDirectoryBadgeIndicator = function useDismissBadgeDirectoryBadgeIndicator(badgeId) {
  badgeId = badgeId.badgeId;
  const enabled = badgeId.enabled;
  const items = [badgeId, enabled];
  const effect = noop.useEffect(() => {
    if (tmp2) {
      const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
      if (BETA_BADGE_IDS.has(badgeId)) {
        const result = BadgeDirectoryActionCreators.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
        const tmp3Result = BadgeDirectoryActionCreators;
      }
    }
    tmp2 = null != badgeId && enabled;
  }, items);
};
