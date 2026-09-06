// discord_app/modules/saved_messages/hasForLaterPremiumType.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = UserStore.getCurrentUser();
  return PremiumTypeUtils.isPremium(currentUser, PremiumTypes.TIER_2);
}
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () =>
    PremiumTypeUtils.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2),
  );
};
