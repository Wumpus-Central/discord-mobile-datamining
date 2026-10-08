// === Module 13237: MobileWishlistSuggestionsExperiment ===

// Module 13237 (MobileWishlistSuggestionsExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-07-smag-mobile-wishlist-suggestions", kind: "user", defaultConfig: { isEnabled: false }, variations: { 0: { isEnabled: false }, 1: { isEnabled: true } } });
const result = size.fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMobileWishlistSuggestionsEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).isEnabled;
}) : (function useIsMobileWishlistSuggestionsEnabled(location) {
  return closure_2.useConfig({ location }).isEnabled;
});
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  return closure_2.getConfig({ location }).isEnabled;
};