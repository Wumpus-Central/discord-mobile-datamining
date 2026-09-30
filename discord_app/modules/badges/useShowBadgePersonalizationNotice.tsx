// === Module 10870: useShowBadgePersonalizationNotice ===

// Module 10870 (useShowBadgePersonalizationNotice)
import initialize from "initialize" /* 504 */;
import BadgeUtils from "BadgeUtils" /* 10863 */;
import ConsentStore from "ConsentStore" /* 6208 */;

require = fn;
const Consents = fn(1074).Consents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useShowBadgePersonalizationNotice.tsx");

export default function useShowBadgePersonalizationNotice(arg0) {
  ({ badge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  return BadgeUtils.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
};