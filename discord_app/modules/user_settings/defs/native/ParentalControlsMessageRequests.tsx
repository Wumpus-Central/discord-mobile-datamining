// discord_app/modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../parent_tools/FamilyCenter.messages.js")["7aYkh1"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
    const obj = require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */;
    const selectedTeenId = require("../../../parent_tools/hooks/useSelectedTeen.tsx") /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = require("../../family_center/ParentalControlledUserSettings.tsx") /* result */.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = require("../../content_and_social/DefaultDMSettingsExperiment.tsx") /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: null };
          obj[0] = tmp2(7722).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
          const result = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx").showAgeVerificationGetStartedModal(obj);
          const obj2 = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
        }
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = require("../../family_center/ParentalControlledUserSettings.tsx") /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;