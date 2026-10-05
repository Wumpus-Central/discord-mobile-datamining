// === Module 10971: trackBadgeDirectoryAction ===

// Module 10971 (trackBadgeDirectoryAction)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserStore from "UserStore" /* 1377 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/badges/trackBadgeDirectoryAction.tsx");

export default function trackBadgeDirectoryAction(arg0) {
  let actionName;
  let badge;
  let badge_id;
  let displayedUserId;
  let flag;
  let flag2;
  let id;
  let isSociallyNavigated;
  let tmp10;
  ({ badge, displayedUserId } = arg0);
  ({ actionName, isSociallyNavigated } = arg0);
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    id = currentUser.id;
  }
  let badgeById;
  if (null != badge) {
    if (null != id) {
      badgeById = BadgeDirectoryStore.getBadgeById(badge.badge_id, id);
    }
  }
  let remainingToNextTier;
  if (null != badge) {
    if (null != id) {
      remainingToNextTier = BadgeDirectoryStore.getRemainingToNextTier(badge.badge_id, id);
    }
  }
  let length;
  if (null != displayedUserId) {
    const badges = BadgeDirectoryStore.getBadges(displayedUserId);
    length = badges.filter((owned) => owned.owned).length;
  }
  const obj = { badge_action: actionName, badge_id, badge_tier: tmp10, badge_owner_id: displayedUserId, is_owned: flag, progress_to_next_tier: remainingToNextTier, is_earnable: flag2, is_socially_navigated: isSociallyNavigated, total_badges_owned: length };
  badge_id = undefined;
  const track = AnalyticsUtilsDefault.track;
  const BADGE_DIRECTORY_ACTION = AnalyticEvents.BADGE_DIRECTORY_ACTION;
  AnalyticsUtilsDefault;
  if (badge != null) {
    badge_id = badge.badge_id;
  }
  tmp10 = undefined;
  if (null != badge) {
    let tmp11 = badge.owned ? badge.current_tier : badge.next_tier;
    if (tmp11 == null) {
      const tiers = badge.tiers;
      let key;
      if (tiers != null) {
        const first = tiers[0];
        if (first != null) {
          key = first.key;
        }
      }
      tmp11 = key;
    }
    tmp10 = tmp11;
  }
  flag = undefined;
  if (badgeById != null) {
    flag = badgeById.owned;
  }
  if (flag == null) {
    flag = false;
  }
  flag2 = undefined;
  if (badge != null) {
    flag2 = badge.is_earnable;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  track(BADGE_DIRECTORY_ACTION, obj);
};