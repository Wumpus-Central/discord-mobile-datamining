// discord_app/modules/clips/ClipsExperiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import PlatformUtilsAll from "../../utils/PlatformUtils.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1392).PremiumTypes;
const Features = fn(5117).Features;
const ApexExperiment = fn(1453);
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
const ReactCompilerGating = fn(558);
function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
function isClientClipsCapable(MediaEngineStore) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
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
};
export const useIsClipsAvailable = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsClipsAvailable() {
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
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
        cResult[0] = ignorePlatformRestriction;
        let first = ignorePlatformRestriction;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class C {
          constructor() {
            currentUser = closure_1_5.getCurrentUser();
            obj = closure_1_1(closure_1_3[8]);
            premiumType = undefined;
            if (currentUser != null) {
              premiumType = currentUser.premiumType;
            }
            return obj.isPremiumAtLeast(premiumType, closure_1_6.TIER_2);
          }
        }
        cResult[1] = items;
        cResult[2] = C;
        let tmp11 = C;
        let tmp10 = items;
      } else {
        tmp10 = cResult[1];
        tmp11 = cResult[2];
      }
      const stateFromStores = initialize.useStateFromStores(tmp10, tmp11);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const config = apexExperiment.getConfig({ location: "useEnableClips" });
        class C {
          constructor() {
            currentUser = closure_1_5.getCurrentUser();
            obj = closure_1_1(closure_1_3[8]);
            premiumType = undefined;
            if (currentUser != null) {
              premiumType = currentUser.premiumType;
            }
            return obj.isPremiumAtLeast(premiumType, closure_1_6.TIER_2);
          }
        }
        let tmp14 = config;
      } else {
        tmp14 = cResult[3];
      }
      return (tmp14.enableClips || stateFromStores) && first;
    }
  : function useIsClipsAvailable() {
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
    };
export { isUserPremiumTypeForClipsEarlyAccess };
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
export { isClientClipsCapable };
