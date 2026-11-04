// === Module 11656: useShowBadgePersonalizationNotice ===

// Module 11656 (useShowBadgePersonalizationNotice)
import initialize from "initialize" /* 504 */;
import BadgeUtils from "BadgeUtils" /* 11649 */;
import ConsentStore from "ConsentStore" /* 6877 */;

require = fn;
const Consents = fn(1072).Consents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useShowBadgePersonalizationNotice.tsx");

export default function useShowBadgePersonalizationNotice(arg0) {
  ({ badge, isViewingOtherUser } = arg0);
  items = [ConsentStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  return BadgeUtils.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
};