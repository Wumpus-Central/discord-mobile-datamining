// discord_app/modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4409) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4409) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4409) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4409) /* useAgeVerificationRunner */;
    const obj3 = require(3872) /* isFeatureAgeGated */;
    return require(3872) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4409) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4409) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4409) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4409) /* useAgeVerificationRunner */;
    const obj3 = require(3872) /* isFeatureAgeGated */;
    return require(3872) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;