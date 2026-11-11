// discord_app/modules/premium/tiered_tenure_badging/hooks/useCanUseTenureBadge.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import PremiumPerkGates from "../../perks_state/PremiumPerkGates.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useCanUseTenureBadge.tsx");

export function useCanUseTenureBadge() {
  items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumPerkGates.canUseTenureBadge(currentUser.getCurrentUser()));
}
