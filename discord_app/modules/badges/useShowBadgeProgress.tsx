// === Module 10665: useShowBadgeProgress ===

// Module 10665 (useShowBadgeProgress)
import initialize from "initialize" /* 504 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import ConsentStore from "ConsentStore" /* 6012 */;

require = fn;
const Consents = fn(1074).Consents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useShowBadgeProgress.tsx");

export default function useShowBadgeProgress(arg0) {
  ({ badge, viewerBadge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  if (viewerBadge == null) {
    viewerBadge = badge;
  }
  const tmpResult = BadgeUtils;
  const tmp4 = null != BadgeUtils.findTier(viewerBadge, viewerBadge.next_tier);
  const tmpResult2 = BadgeUtils;
  let owned = !isViewingOtherUser;
  if (!isViewingOtherUser) {
    owned = viewerBadge.owned;
  }
  if (owned) {
    owned = tmp4;
  }
  if (owned) {
    owned = !tmp5;
  }
  return owned;
};