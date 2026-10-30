// discord_app/modules/clips/ClipsExperiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import PlatformUtilsAll from "../../utils/PlatformUtils.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1386).PremiumTypes;
const Features = fn(5763).Features;
const ApexExperiment = fn(1448);
let obj2 = {
  kind: "user",
  name: "2026-03-clips-experiment",
  defaultConfig: { enableClips: false, ignorePlatformRestriction: false },
  variations: null,
};
let obj3 = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
obj3[2] = { enableClips: true, ignorePlatformRestriction: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export function areClipsAvailable() {
  let ignorePlatformRestriction = apexExperiment.getConfig({
    location: "isClipsClientCapable",
  }).ignorePlatformRestriction;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  if (!ignorePlatformRestriction) {
    let isDesktopResult = PlatformUtilsAll.isDesktop();
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.hasClipsV3Support();
    }
    ignorePlatformRestriction = isDesktopResult;
  }
  if (ignorePlatformRestriction) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return (
      PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2) ||
      apexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips
    );
  } else {
    return false;
  }
}
export function useIsClipsAvailable() {
  let ignorePlatformRestriction = apexExperiment.getConfig({
    location: "isClipsClientCapable",
  }).ignorePlatformRestriction;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  if (!ignorePlatformRestriction) {
    let isDesktopResult = PlatformUtilsAll.isDesktop();
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.hasClipsV3Support();
    }
    ignorePlatformRestriction = isDesktopResult;
  }
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  return (
    (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) &&
    ignorePlatformRestriction
  );
}
export function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
export function isClientClipsCapable(MediaEngineStore) {
  let ignorePlatformRestriction = apexExperiment.getConfig({
    location: "isClipsClientCapable",
  }).ignorePlatformRestriction;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  if (!ignorePlatformRestriction) {
    let isDesktopResult = PlatformUtilsAll.isDesktop();
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.hasClipsV3Support();
    }
    ignorePlatformRestriction = isDesktopResult;
  }
  return ignorePlatformRestriction;
}
