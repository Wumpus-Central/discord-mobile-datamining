// discord_app/modules/wishlists/native/WishlistCountdownMobileExperiment.tsx
import WishlistCountdownExperiment from "../experiments/WishlistCountdownExperiment.tsx";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistCountdownMobileExperiment.tsx");

export function useWishlistCountdownMobileConfigPeek(UserProfileWishlistGrid) {
  _require = UserProfileWishlistGrid;
  items = [AuthenticationStore, ApexExperimentStore];
  const items1 = [UserProfileWishlistGrid];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const WishlistCountdownMobileExperiment = WishlistCountdownExperiment.WishlistCountdownMobileExperiment;
      return WishlistCountdownMobileExperiment.getConfig({ location: _location }, { autoTrackExposure: false });
    },
    items1,
  );
}
export function WishlistCountdownMobileExposure(location) {
  const WishlistCountdownMobileExperiment = WishlistCountdownExperiment.WishlistCountdownMobileExperiment;
  const config = WishlistCountdownMobileExperiment.useConfig({ location: location.location });
  return null;
}
