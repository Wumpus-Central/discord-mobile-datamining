// === Module 16562: TinyBroncoNoticeVisibility ===

// Module 16562 (TinyBroncoNoticeVisibility)
import Server from "Server" /* 1993 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6725 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoNoticeVisibility.tsx");

export function shouldShowAgeNotice() {
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
}
export function useShouldShowAgeNotice() {
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
}
export function useShouldShowAgeNoticePromo() {
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
}