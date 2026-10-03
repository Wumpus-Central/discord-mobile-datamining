// === Module 14523: TinyBroncoNoticeVisibility ===

// Module 14523 (TinyBroncoNoticeVisibility)
import c from "c" /* 576 */;
import Server from "Server" /* 1985 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5581 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      let tmp3 = null != prop;
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
      }
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
      }
      return tmp3;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (isFeatureAgeGated) {
    isFeatureAgeGated = tmpResult.useStateFromStores(tmp5, tmp6);
  }
  return isFeatureAgeGated;
}) : (() => {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  const items = [UserStore];
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      let tmp3 = null != prop;
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
      }
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
      }
      return tmp3;
    });
  }
  return isFeatureAgeGated;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoNoticeVisibility.tsx");

export const shouldShowAgeNotice = function shouldShowAgeNotice() {
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  if (isFeatureAgeGatedResult) {
    const currentUser = UserStore.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    isFeatureAgeGatedResult = null != prop && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
    const tmp8 = null != prop && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
  }
  return isFeatureAgeGatedResult;
};
export const useShouldShowAgeNotice = tmp2;
export const useShouldShowAgeNoticePromo = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      let tmp3 = null != prop;
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
      }
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
      }
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
      }
      return tmp3;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (isFeatureAgeGated) {
    isFeatureAgeGated = tmpResult.useStateFromStores(tmp5, tmp6);
  }
  return isFeatureAgeGated;
}) : (() => {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  const items = [UserStore];
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      let tmp3 = null != prop;
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
      }
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
      }
      if (tmp3) {
        tmp3 = prop !== Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
      }
      return tmp3;
    });
  }
  return isFeatureAgeGated;
});