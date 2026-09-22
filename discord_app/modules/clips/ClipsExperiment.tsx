// === Module 13948: ClipsExperiment ===

// Module 13948 (ClipsExperiment)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4415 */;
import isClientClipsCapableDefault from "isClientClipsCapable" /* 13949 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const ApexExperiment = fn(1434);
const obj2 = { kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: null };
const obj3 = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
obj3[2] = { enableClips: true, ignorePlatformRestriction: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    let enableClips = PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
    if (!enableClips) {
      enableClips = apexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips;
    }
    return enableClips;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = function useIsClipsAvailable() {
  const tmp = isClientClipsCapableDefault(MediaEngineStore);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  return (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
};
export const isUserPremiumTypeForClipsEarlyAccess = function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
};
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}