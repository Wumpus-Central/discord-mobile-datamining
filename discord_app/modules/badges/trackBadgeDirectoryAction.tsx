// discord_app/modules/badges/trackBadgeDirectoryAction.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";
import BadgeDirectoryStore from "BadgeDirectoryStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/trackBadgeDirectoryAction.tsx");

export default function trackBadgeDirectoryAction(arg0) {
  ({ badge, displayedUserId } = arg0);
  ({ actionName, isSociallyNavigated } = arg0);
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
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
  const obj2 = {
    badge_action: actionName,
    badge_id: null,
    badge_tier: null,
    badge_owner_id: null,
    is_owned: null,
    progress_to_next_tier: null,
    is_earnable: null,
    is_socially_navigated: null,
    total_badges_owned: null,
  };
  let badge_id;
  if (badge != null) {
    badge_id = badge.badge_id;
  }
  obj2.badge_id = badge_id;
  let tmp9;
  if (null != badge) {
    let tmp10 = badge.owned ? badge.current_tier : badge.next_tier;
    if (tmp10 == null) {
      const tiers = badge.tiers;
      let key;
      if (tiers != null) {
        const first = tiers[0];
        if (first != null) {
          key = first.key;
        }
      }
      tmp10 = key;
    }
    tmp9 = tmp10;
  }
  obj2.badge_tier = tmp9;
  obj2.badge_owner_id = displayedUserId;
  let flag;
  if (badgeById != null) {
    flag = badgeById.owned;
  }
  if (flag == null) {
    flag = false;
  }
  obj2.is_owned = flag;
  obj2.progress_to_next_tier = remainingToNextTier;
  let flag2;
  if (badge != null) {
    flag2 = badge.is_earnable;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  obj2.is_earnable = flag2;
  obj2.is_socially_navigated = isSociallyNavigated;
  obj2.total_badges_owned = length;
  AnalyticsUtilsDefault.track(AnalyticEvents.BADGE_DIRECTORY_ACTION, obj2);
}
