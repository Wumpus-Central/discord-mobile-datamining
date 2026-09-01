// discord_app/modules/saved_messages/hasForLaterPremiumType.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import isPremiumAtLeast from "../../utils/PremiumTypeUtils.tsx";
import closure_2 from "../../stores/UserStore.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return isPremiumAtLeast.isPremium(currentUser, PremiumTypes.TIER_2);
}
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () =>
    callback(table[2]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2),
  );
};
