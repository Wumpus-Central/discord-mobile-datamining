// discord_app/modules/tiny_bronco/TinyBroncoNoticeVisibility.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import Server from "../../flow/Server.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      let tmp6;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = RegionalFeatureConfigUtils;
      let isFeatureAgeGated = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          currentUser = currentUser.getCurrentUser();
          let prop;
          if (currentUser != null) {
            prop = currentUser.ageVerificationStatus;
          }
          const tmp3 =
            null != prop &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
          return tmp3;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      if (isFeatureAgeGated) {
        isFeatureAgeGated = tmpResult.useStateFromStores(tmp5, tmp6);
      }
      return isFeatureAgeGated;
    }
  : () => {
      const obj = RegionalFeatureConfigUtils;
      let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
      const items = [UserStore];
      const obj2 = get_initialized;
      if (isFeatureAgeGated) {
        isFeatureAgeGated = obj2.useStateFromStores(items, () => {
          currentUser = currentUser.getCurrentUser();
          let prop;
          if (currentUser != null) {
            prop = currentUser.ageVerificationStatus;
          }
          const tmp3 =
            null != prop &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
          return tmp3;
        });
      }
      return isFeatureAgeGated;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      let tmp6;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = RegionalFeatureConfigUtils;
      let isFeatureAgeGated = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          currentUser = currentUser.getCurrentUser();
          let prop;
          if (currentUser != null) {
            prop = currentUser.ageVerificationStatus;
          }
          const tmp3 =
            null != prop &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
          return tmp3;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      if (isFeatureAgeGated) {
        isFeatureAgeGated = tmpResult.useStateFromStores(tmp5, tmp6);
      }
      return isFeatureAgeGated;
    }
  : () => {
      const obj = RegionalFeatureConfigUtils;
      let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
      const items = [UserStore];
      const obj2 = get_initialized;
      if (isFeatureAgeGated) {
        isFeatureAgeGated = obj2.useStateFromStores(items, () => {
          currentUser = currentUser.getCurrentUser();
          let prop;
          if (currentUser != null) {
            prop = currentUser.ageVerificationStatus;
          }
          const tmp3 =
            null != prop &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN &&
            prop !== Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
          return tmp3;
        });
      }
      return isFeatureAgeGated;
    };
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoNoticeVisibility.tsx");

export const shouldShowAgeNotice = function shouldShowAgeNotice() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  if (isFeatureAgeGatedResult) {
    const currentUser = UserStore.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    isFeatureAgeGatedResult =
      null != prop &&
      prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT &&
      prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
    null != prop &&
      prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT &&
      prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
  }
  return isFeatureAgeGatedResult;
};
export const useShouldShowAgeNotice = tmp2;
export const useShouldShowAgeNoticePromo = tmp3;
