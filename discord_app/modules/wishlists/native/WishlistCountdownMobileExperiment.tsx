// === Module 15892: WishlistCountdownMobileExperiment ===

// Module 15892 (WishlistCountdownMobileExperiment)
import WishlistCountdownExperiment from "WishlistCountdownExperiment" /* 15893 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistCountdownMobileExperiment.tsx");

export function useWishlistCountdownMobileConfigPeek(UserProfileWishlistGrid) {
  _require = UserProfileWishlistGrid;
  items = [AuthenticationStore, ApexExperimentStore];
  const items1 = [UserProfileWishlistGrid];
  return require("initialize").useStateFromStores(items, () => {
    const WishlistCountdownMobileExperiment = WishlistCountdownExperiment.WishlistCountdownMobileExperiment;
    return WishlistCountdownMobileExperiment.getConfig({ location: _location }, { autoTrackExposure: false });
  }, items1);
}
export function WishlistCountdownMobileExposure(location) {
  const WishlistCountdownMobileExperiment = WishlistCountdownExperiment.WishlistCountdownMobileExperiment;
  const config = WishlistCountdownMobileExperiment.useConfig({ location: location.location });
  return null;
}