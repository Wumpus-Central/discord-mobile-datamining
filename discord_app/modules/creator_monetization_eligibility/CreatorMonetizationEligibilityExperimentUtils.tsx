// === Module 7227: set ===

// Module 7227 (set)
import initialize from "initialize" /* 589 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd" /* 4041 */;
import { GuildFeatures } from "ME" /* 676 */;

require = fn;
const set = new Set(["US"]);
const result = require("obj132").fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx");

export const useIsUserInCreatorMonetizationEligibleCountry = function useIsUserInCreatorMonetizationEligibleCountry() {
  const items = [closure_2, closure_3];
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
export const isUserInCreatorMonetizationEligibleCountry = function isUserInCreatorMonetizationEligibleCountry() {
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
export const useIsRavenOnboardingGuild = function useIsRavenOnboardingGuild(arg0) {
  return null != arg0;
};
export const isRavenOnboardingGuild = function isRavenOnboardingGuild(arg0) {
  return null != arg0;
};
export const useIsWhitegloveOnboardingGuild = function useIsWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
};
export const isWhitegloveOnboardingGuild = function isWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
};
export const useIsExpeditedOnboardingGuild = function useIsExpeditedOnboardingGuild(stateFromStores) {
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp2 = null != id;
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
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