// discord_app/modules/clips/ClipsExperiment.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";
import ApexExperiment from "ApexExperiment";

const require = arg1;
ApexExperiment = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
ApexExperiment[2] = { enableClips: true, ignorePlatformRestriction: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: ApexExperiment });
const result = require("GuildFeatures").fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (importDefault(4253)(_detectH265HardwareDecode)) {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    let enableClips = tmp(3839).isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
    if (!enableClips) {
      enableClips = apexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips;
    }
    return enableClips;
  } else {
    return false;
  }
  tmp = importDefault;
};
export const useIsClipsAvailable = function useIsClipsAvailable() {
  const tmp = importDefault(4253)(_detectH265HardwareDecode);
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return callback(table[6]).isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  const obj = require(589) /* initialize */;
  return (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
};
export const isUserPremiumTypeForClipsEarlyAccess = function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return importDefault(3839).isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
};
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}