// === Module 15356: ClipsExperiment ===

// Module 15356 (ClipsExperiment)
import initialize from "initialize" /* 504 */;
import PlatformUtilsAll from "PlatformUtils" /* 1377 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const PremiumTypes = fn(1387).PremiumTypes;
const Features = fn(5888).Features;
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export function areClipsAvailable() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  let isDesktopResult = PlatformUtilsAll.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.supports(Features.CLIPS);
  }
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.hasClipsV3Support();
  }
  let isPremiumAtLeastResult = isDesktopResult;
  if (isPremiumAtLeastResult) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    isPremiumAtLeastResult = PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
  }
  return isPremiumAtLeastResult;
}
export function useIsClipsAvailable() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  let isDesktopResult = PlatformUtilsAll.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.supports(Features.CLIPS);
  }
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.hasClipsV3Support();
  }
  items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  }) && isDesktopResult;
}
export function isUserPremiumTypeForClipsEarlyAccess(currentUser) {
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
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
  const mediaEngine = MediaEngineStore.getMediaEngine();
  let isDesktopResult = PlatformUtilsAll.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.supports(Features.CLIPS);
  }
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.hasClipsV3Support();
  }
  return isDesktopResult;
}