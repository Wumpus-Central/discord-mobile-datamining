// === Module 15893: WishlistCountdownExperiment ===

// Module 15893 (WishlistCountdownExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
let ApexExperiment = fn(1452);
const obj2 = { name: "2026-11-wishlist-countdown", kind: "user", defaultConfig: { labelsEnabled: false, reorderEnabled: false }, variations: null };
const obj3 = { 1: null, 2: { labelsEnabled: true, reorderEnabled: false } };
obj3[2] = { labelsEnabled: true, reorderEnabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = fn(1452);
const obj5 = { name: "2026-11-wishlist-countdown-mobile", kind: "user", defaultConfig: { labelsEnabled: false, reorderEnabled: false }, variations: null };
const obj6 = { 1: null, 2: { labelsEnabled: true, reorderEnabled: false } };
obj6[2] = { labelsEnabled: true, reorderEnabled: true };
obj5.variations = obj6;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/experiments/WishlistCountdownExperiment.tsx");

export const WishlistCountdownExperiment = apexExperiment;
export const WishlistCountdownMobileExperiment = apexExperiment1;
export function useWishlistCountdownConfigPeek(_location) {
  _require = _location;
  items = [AuthenticationStore, ApexExperimentStore];
  const items1 = [_location];
  return require("initialize").useStateFromStores(items, () => apexExperiment.getConfig({ location: _location }, { autoTrackExposure: false }), items1);
}
export function WishlistCountdownExposure(location) {
  const config = apexExperiment.useConfig({ location: location.location });
  return null;
}