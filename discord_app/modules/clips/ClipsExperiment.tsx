// discord_app/modules/clips/ClipsExperiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import PlatformUtilsAll from "../../utils/PlatformUtils.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1385).PremiumTypes;
const Features = fn(5768).Features;
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
  const items = [UserStore];
  return (
    initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let premiumType;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
    }) && isDesktopResult
  );
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
