// === Module 14434: ClipsExperiment ===

// Module 14434 (ClipsExperiment)
import initialize from "initialize" /* 504 */;
import PlatformUtilsAll from "PlatformUtils" /* 1378 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2172 */;
import DevSettingsStore from "DevSettingsStore" /* 5388 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8303 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const PremiumTypes = fn(1388).PremiumTypes;
const Features = fn(5539).Features;
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
  let tmp4 = !isDesktopResult;
  if (!isDesktopResult) {
    let isDeveloper = DeveloperExperimentStore.isDeveloper;
    if (isDeveloper) {
      isDeveloper = DevSettingsStore.get("clips_ignore_platform_requirement");
    }
    tmp4 = !isDeveloper;
  }
  let isPremiumAtLeastResult = !tmp4;
  if (!tmp4) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    isPremiumAtLeastResult = PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
  }
  return isPremiumAtLeastResult;
}
export function useIsClipsPlatformSupported() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  let isDesktopResult = PlatformUtilsAll.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.supports(Features.CLIPS);
  }
  if (isDesktopResult) {
    isDesktopResult = mediaEngine.hasClipsV3Support();
  }
  items = [DevSettingsStore, DeveloperExperimentStore];
  if (!isDesktopResult) {
    isDesktopResult = obj3.useStateFromStores(items, () => {
      isDeveloper = isDeveloper.isDeveloper;
      if (isDeveloper) {
        isDeveloper = DevSettingsStore.get("clips_ignore_platform_requirement");
      }
      return isDeveloper;
    });
  }
  return isDesktopResult;
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
  items = [DevSettingsStore, DeveloperExperimentStore];
  if (!isDesktopResult) {
    isDesktopResult = obj3.useStateFromStores(items, () => {
      isDeveloper = isDeveloper.isDeveloper;
      if (isDeveloper) {
        isDeveloper = DevSettingsStore.get("clips_ignore_platform_requirement");
      }
      return isDeveloper;
    });
  }
  obj3 = initialize;
  const items1 = [UserStore];
  const tmp4Result = initialize;
  return initialize.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  }) && isDesktopResult;
}
export function isClipsPlatformRequirementIgnored() {
  let isDeveloper = DeveloperExperimentStore.isDeveloper;
  if (isDeveloper) {
    isDeveloper = DevSettingsStore.get("clips_ignore_platform_requirement");
  }
  return isDeveloper;
}
export function isUserPremiumTypeForClipsEarlyAccess(currentUser) {
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  return PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
export function useIsUserPremiumTypeForClipsEarlyAccess() {
  items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
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