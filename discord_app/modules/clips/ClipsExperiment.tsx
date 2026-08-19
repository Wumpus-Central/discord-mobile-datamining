// === Module 4527: apexExperiment ===

// Module 4527 (apexExperiment)
import initialize from "initialize" /* 589 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import isClientClipsCapableDefault from "isClientClipsCapable" /* 4528 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import "ApexExperiment";

require = fn;
const ApexExperiment = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
ApexExperiment[2] = { enableClips: true, ignorePlatformRestriction: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: ApexExperiment });
const result = require("obj132").fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (isClientClipsCapableDefault(closure_3)) {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    let enableClips = getPremiumPlanItemDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
    if (!enableClips) {
      enableClips = apexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips;
    }
    return enableClips;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = function useIsClipsAvailable() {
  const tmp = isClientClipsCapableDefault(closure_3);
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return callback(table[6]).isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  return (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
};
export const isUserPremiumTypeForClipsEarlyAccess = function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return getPremiumPlanItemDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
};
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}