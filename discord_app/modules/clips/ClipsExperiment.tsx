// discord_app/modules/clips/ClipsExperiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import isClientClipsCapableDefault from "isClientClipsCapable.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
fn(1433);
let ApexExperiment = {
  kind: "user",
  name: "2026-03-clips-experiment",
  defaultConfig: { enableClips: false, ignorePlatformRestriction: false },
  variations: null,
};
ApexExperiment = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
ApexExperiment[2] = { enableClips: true, ignorePlatformRestriction: true };
ApexExperiment.variations = ApexExperiment;
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = ApexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    let enableClips = PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
    if (!enableClips) {
      enableClips = ApexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips;
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
  return (ApexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
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
