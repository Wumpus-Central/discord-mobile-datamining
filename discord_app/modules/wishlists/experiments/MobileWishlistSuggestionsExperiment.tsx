// discord_app/modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-07-smag-mobile-wishlist-suggestions",
  kind: "user",
  defaultConfig: { isEnabled: false },
  variations: { 0: { isEnabled: false }, 1: { isEnabled: true } },
});
const result = size.fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = function useIsMobileWishlistSuggestionsEnabled(
  WishlistEmptyState,
) {
  return closure_0.useConfig({ location: WishlistEmptyState }).isEnabled;
};
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  return closure_0.getConfig({ location }).isEnabled;
};
