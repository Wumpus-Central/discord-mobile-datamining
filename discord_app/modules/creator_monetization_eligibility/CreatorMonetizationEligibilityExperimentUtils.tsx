// discord_app/modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import UserStore from "../../stores/UserStore.tsx";
import BillingInfoStore from "../../stores/billing/BillingInfoStore.tsx";

require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const set = new Set(["US"]);
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore, BillingInfoStore];
        const fn = function l() {
          currentUser = currentUser.getCurrentUser();
          let country;
          if (currentUser != null) {
            const storeCountry = currentUser.storeCountry;
            if (storeCountry != null) {
              country = storeCountry.country;
            }
          }
          if (country == null) {
            country = ipCountryCode.ipCountryCode;
          }
          let hasItem = null != country;
          if (hasItem) {
            hasItem = set.has(country);
          }
          return hasItem;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [UserStore, BillingInfoStore];
      return initialize.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let country;
        if (currentUser != null) {
          const storeCountry = currentUser.storeCountry;
          if (storeCountry != null) {
            country = storeCountry.country;
          }
        }
        if (country == null) {
          country = ipCountryCode.ipCountryCode;
        }
        let hasItem = null != country;
        if (hasItem) {
          hasItem = set.has(country);
        }
        return hasItem;
      });
    };
function useIsRavenOnboardingGuild(arg0) {
  return null != arg0;
}
function isRavenOnboardingGuild(arg0) {
  return null != arg0;
}
function useIsWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
}
function isWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx",
);

export const useIsUserInCreatorMonetizationEligibleCountry = tmp3;
export const isUserInCreatorMonetizationEligibleCountry = function isUserInCreatorMonetizationEligibleCountry() {
  const currentUser = UserStore.getCurrentUser();
  let country;
  if (currentUser != null) {
    const storeCountry = currentUser.storeCountry;
    if (storeCountry != null) {
      country = storeCountry.country;
    }
  }
  if (country == null) {
    country = BillingInfoStore.ipCountryCode;
  }
  let hasItem = null != country;
  if (hasItem) {
    hasItem = set.has(country);
  }
  return hasItem;
};
export { useIsRavenOnboardingGuild };
export { isRavenOnboardingGuild };
export { useIsWhitegloveOnboardingGuild };
export { isWhitegloveOnboardingGuild };
export const useIsExpeditedOnboardingGuild = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      let tmp2 = null != id;
      let hasItem = null != id;
      if (hasItem) {
        const features = id.features;
        hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
      }
      if (!tmp2) {
        tmp2 = hasItem;
      }
      return tmp2;
    }
  : (id) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      let tmp2 = null != id;
      let hasItem = null != id;
      if (hasItem) {
        const features = id.features;
        hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
      }
      if (!tmp2) {
        tmp2 = hasItem;
      }
      return tmp2;
    };
export const isExpeditedMonetizationOnboardingGuild = function isExpeditedMonetizationOnboardingGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let tmp2 = null != id;
  if (!tmp2) {
    let hasItem = null != id;
    if (hasItem) {
      const features = id.features;
      hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
