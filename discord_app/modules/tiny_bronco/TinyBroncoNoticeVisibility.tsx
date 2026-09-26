// === Module 14277: TinyBroncoNoticeVisibility ===

// Module 14277 (TinyBroncoNoticeVisibility)
import Server from "Server" /* 1979 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5736 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
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
export const useShouldShowAgeNotice = function useShouldShowAgeNotice() {
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
};
export const useShouldShowAgeNoticePromo = function useShouldShowAgeNoticePromo() {
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
};