// === Module 14536: WishlistCountdownExperiment ===

// Module 14536 (WishlistCountdownExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const ApexExperiment = fn(1452);
const obj2 = { name: "2026-11-wishlist-countdown", kind: "user", defaultConfig: { labelsEnabled: false, reorderEnabled: false }, variations: null };
const obj3 = { 1: null, 2: { labelsEnabled: true, reorderEnabled: false } };
obj3[2] = { labelsEnabled: true, reorderEnabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/experiments/WishlistCountdownExperiment.tsx");

export const WishlistCountdownExperiment = apexExperiment;
export function useWishlistCountdownConfigPeek(UserProfileWishlistGrid) {
  _require = UserProfileWishlistGrid;
  items = [AuthenticationStore, ApexExperimentStore];
  const items1 = [UserProfileWishlistGrid];
  return require("initialize").useStateFromStores(items, () => apexExperiment.getConfig({ location: _location }, { autoTrackExposure: false }), items1);
}
export function WishlistCountdownExposure(location) {
  const config = apexExperiment.useConfig({ location: location.location });
  return null;
}