// discord_app/modules/badges/useShowBadgePersonalizationNotice.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import BadgeUtils from "BadgeUtils.tsx";
import ConsentStore from "../../stores/ConsentStore.tsx";

require = fn;
const Consents = fn(1074).Consents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useShowBadgePersonalizationNotice.tsx");

export default function useShowBadgePersonalizationNotice(arg0) {
  ({ badge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    ConsentStore.hasConsented(constants.PERSONALIZATION),
  );
  return BadgeUtils.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
}
