// discord_app/modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-07-smag-mobile-wishlist-suggestions",
  kind: "user",
  defaultConfig: { isEnabled: false },
  variations: { 0: { isEnabled: false }, 1: { isEnabled: true } },
};
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).isEnabled;
    }
  : (location) => {
      const obj = { location };
      return closure_2.useConfig(obj).isEnabled;
    };
const result = size.fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = tmp2;
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  const obj = { location };
  return closure_2.getConfig(obj).isEnabled;
};
