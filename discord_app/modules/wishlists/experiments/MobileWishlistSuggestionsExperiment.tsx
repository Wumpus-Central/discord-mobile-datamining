// === Module 12686: useIsMobileWishlistSuggestionsEnabled ===

// Module 12686 (useIsMobileWishlistSuggestionsEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-smag-mobile-wishlist-suggestions", kind: "user", defaultConfig: { isEnabled: false }, variations: { 0: { isEnabled: false }, 1: { isEnabled: true } } });
const result = set.fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = function useIsMobileWishlistSuggestionsEnabled(WishlistEmptyState) {
  return closure_0.useConfig({ location: WishlistEmptyState }).isEnabled;
};
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  return closure_0.getConfig({ location }).isEnabled;
};