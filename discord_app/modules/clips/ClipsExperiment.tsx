// discord_app/modules/clips/ClipsExperiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getPremiumPlanItemDefault from "../../utils/PremiumUtils.tsx";
import isClientClipsCapableDefault from "isClientClipsCapable.tsx";
import closure_3 from "../../stores/MediaEngineStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";

require = arg1;
ApexExperiment = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
ApexExperiment[2] = { enableClips: true, ignorePlatformRestriction: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-03-clips-experiment",
  defaultConfig: { enableClips: false, ignorePlatformRestriction: false },
  variations: ApexExperiment,
});
const result = require("set").fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

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
  const tmp = importDefault;
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
  const obj = initialize;
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
