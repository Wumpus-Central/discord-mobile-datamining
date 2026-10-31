// === Module 18036: MobileOnboardingFrictionExperiment ===

// Module 18036 (MobileOnboardingFrictionExperiment)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import MobileOnboardingFrictionShared from "MobileOnboardingFrictionShared" /* 18037 */;
import ParentalConsentStore from "ParentalConsentStore" /* 17988 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
let closure_5 = 30 * fn(5772).MS_PER_MINUTE;
const ApexExperiment = fn(1447);
let obj2 = { name: "2026-10-android-mobile-onboarding-friction-negative-test", kind: "user", defaultConfig: fn(18037).CONTROL, variations: { 0: fn(18037).CONTROL, 1: fn(18037).LOW_FRICTION_V1 } };
let closure_6 = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/MobileOnboardingFrictionExperiment.android.tsx");

export default {
  trackMobileOnboardingFrictionExposure(AuthManager) {
    if (!ParentalConsentStore.getShouldShowGuardianConnect()) {
      if (!obj.isMetaQuest()) {
        const obj2 = { location: AuthManager };
        const config = closure_6.getConfig(obj2, { autoTrackExposure: true });
      }
      obj = MetaQuestUtils;
    }
    const CONTROL = MobileOnboardingFrictionShared.CONTROL;
  },
  getMobileOnboardingFrictionConfig(NewUserUtils) {
    if (!ParentalConsentStore.getShouldShowGuardianConnect()) {
      if (!obj.isMetaQuest()) {
        const obj2 = { location: NewUserUtils };
        let CONTROL = closure_6.getConfig(obj2, { autoTrackExposure: false });
      }
      return CONTROL;
    }
    CONTROL = MobileOnboardingFrictionShared.CONTROL;
  },
  isATTDeferred(location) {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      let tmp11 = !tmp2;
      if (!tmp2) {
        const _Date = Date;
        const timestamp = Date.now();
        tmp11 = timestamp < SnowflakeUtilsDefault.extractTimestamp(currentUser.id) + closure_5;
      }
      return tmp11;
    } else {
      if (!ParentalConsentStore.getShouldShowGuardianConnect()) {
        if (!obj.isMetaQuest()) {
          const obj2 = { location };
          let CONTROL = closure_6.getConfig(obj2, { autoTrackExposure: false });
        }
        obj = MetaQuestUtils;
      }
      CONTROL = MobileOnboardingFrictionShared.CONTROL;
    }
  }
};