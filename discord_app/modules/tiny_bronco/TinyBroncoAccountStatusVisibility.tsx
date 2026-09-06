// === Module 14717: TinyBroncoAccountStatusVisibility ===

// Module 14717 (TinyBroncoAccountStatusVisibility)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10959 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14684 */;
import noop from "module_19" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 4775 */;

require = fn;
const TinyBroncoConstants = fn(14683);
({ TINY_BRONCO_ANNOUNCEMENT_EXCLUDED_COUNTRIES: closure_4, TINY_BRONCO_SETTINGS_LOCATION: hasOwnProperty } = TinyBroncoConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoAccountStatusVisibility.tsx");

export const isTinyBroncoAnnouncementCountry = function isTinyBroncoAnnouncementCountry(alpha2) {
  let tmp = null != alpha2;
  if (tmp) {
    tmp = !set.has(alpha2.alpha2);
  }
  return tmp;
};
export const shouldShowTinyBroncoAccountStatus = function shouldShowTinyBroncoAccountStatus() {
  let isTinyBroncoEnabledResult = TinyBroncoExperiment.isTinyBroncoEnabled(hasOwnProperty);
  if (isTinyBroncoEnabledResult) {
    const userCountryCode = RegionalFeatureConfigStore.getUserCountryCode();
    let hasAgeGatedFeaturesResult = null != userCountryCode;
    if (hasAgeGatedFeaturesResult) {
      hasAgeGatedFeaturesResult = !set.has(userCountryCode.alpha2);
    }
    if (hasAgeGatedFeaturesResult) {
      let tmpResult = RegionalFeatureConfigUtils;
      hasAgeGatedFeaturesResult = tmpResult.hasAgeGatedFeatures();
    }
    if (hasAgeGatedFeaturesResult) {
      tmpResult = AgeVerificationUtils;
      let isAssignedByDiscordResult = tmpResult.isAssignedByDiscord();
      if (!isAssignedByDiscordResult) {
        isAssignedByDiscordResult = !AgeVerificationUtils.isAgeVerified();
        const tmpResult1 = AgeVerificationUtils;
      }
      hasAgeGatedFeaturesResult = isAssignedByDiscordResult;
    }
    isTinyBroncoEnabledResult = hasAgeGatedFeaturesResult;
  }
  return isTinyBroncoEnabledResult;
};
export const useShouldShowTinyBroncoAccountStatus = function useShouldShowTinyBroncoAccountStatus() {
  isTinyBroncoEnabled = isTinyBroncoEnabled(stateFromStores[3]).useIsTinyBroncoEnabled(closure_5);
  let obj = isTinyBroncoEnabled(stateFromStores[3]);
  let isAssignedByDiscord = isTinyBroncoEnabled(stateFromStores[5]).useIsAssignedByDiscord();
  const obj2 = isTinyBroncoEnabled(stateFromStores[5]);
  const obj3 = isTinyBroncoEnabled(stateFromStores[5]);
  const tmp3 = !isTinyBroncoEnabled(stateFromStores[5]).useIsAgeVerified();
  const hasAgeGatedFeatures = isTinyBroncoEnabled(stateFromStores[4]).useHasAgeGatedFeatures();
  const obj4 = isTinyBroncoEnabled(stateFromStores[4]);
  const items = [RegionalFeatureConfigStore];
  stateFromStores = isTinyBroncoEnabled(stateFromStores[6]).useStateFromStores(items, () => userCountryCode.getUserCountryCode());
  const items1 = [isTinyBroncoEnabled, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = isTinyBroncoEnabled;
    if (isTinyBroncoEnabled) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
    }
  }, items1);
  let tmp7 = isTinyBroncoEnabled;
  if (tmp7) {
    let tmp9 = null != stateFromStores;
    if (tmp9) {
      tmp9 = !set.has(stateFromStores.alpha2);
    }
    if (tmp9) {
      tmp9 = hasAgeGatedFeatures;
    }
    if (tmp9) {
      if (!isAssignedByDiscord) {
        isAssignedByDiscord = tmp3;
      }
      tmp9 = isAssignedByDiscord;
    }
    tmp7 = tmp9;
  }
  return tmp7;
};