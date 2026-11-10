// discord_app/modules/clips/ClipsExperiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import PlatformUtilsAll from "../../utils/PlatformUtils.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import DeveloperExperimentStore from "../../stores/DeveloperExperimentStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1387).PremiumTypes;
const Features = fn(5899).Features;
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
  const stateFromStores = initialize.useStateFromStores(items, () => {
    isDeveloper = isDeveloper.isDeveloper;
    if (isDeveloper) {
      isDeveloper = DevSettingsStore.get("clips_ignore_platform_requirement");
    }
    return isDeveloper;
  });
  const items1 = [UserStore];
  let stateFromStores1 = initialize.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  if (stateFromStores1) {
    if (!isDesktopResult) {
      isDesktopResult = stateFromStores;
    }
    stateFromStores1 = isDesktopResult;
  }
  return stateFromStores1;
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
