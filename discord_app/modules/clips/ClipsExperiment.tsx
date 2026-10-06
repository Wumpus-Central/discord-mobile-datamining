// === Module 13502: ClipsExperiment ===

// Module 13502 (ClipsExperiment)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import isClientClipsCapableDefault from "isClientClipsCapable" /* 13503 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import UserStore from "UserStore" /* 1377 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const PremiumTypes = PremiumConstants.PremiumTypes;
let obj = { kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
obj2[2] = { enableClips: true, ignorePlatformRestriction: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TIER_2;
  let first;
  let tmp12;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = isClientClipsCapableDefault(MediaEngineStore);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function p() {
      currentUser = currentUser.getCurrentUser();
      let premiumType;
      const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
      PremiumUtilsDefault;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
    };
    cResult[1] = items;
    cResult[2] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const config = apexExperiment.getConfig({ location: "useEnableClips" });
    cResult[3] = config;
    tmp12 = config;
  } else {
    tmp12 = cResult[3];
  }
  return (tmp12.enableClips || stateFromStores) && first;
}) : (() => {
  let TIER_2;
  const items = [UserStore];
  const tmp = isClientClipsCapableDefault(MediaEngineStore);
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  const tmp3 = (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
  return tmp3;
});
function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
  PremiumUtilsDefault;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    const enableClips = isPremiumAtLeast(premiumType, PremiumTypes.TIER_2) || apexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips;
    return enableClips;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = tmp3;
export { isUserPremiumTypeForClipsEarlyAccess };
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}