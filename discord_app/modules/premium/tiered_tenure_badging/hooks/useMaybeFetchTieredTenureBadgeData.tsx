// discord_app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx",
);

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [UserStore];
  _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("initialize");
  importDefault = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountEffectDefault(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  });
};
