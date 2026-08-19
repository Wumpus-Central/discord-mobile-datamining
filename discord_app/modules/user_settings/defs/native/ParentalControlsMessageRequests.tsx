// === Module 15035: toggle ===

// Module 15035 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 5254 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 5428 */;
import useSelectedTeen from "useSelectedTeen" /* 7623 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import result2 from "result" /* 14182 */;
import shouldAgeVerifyForDMDefaultOff from "shouldAgeVerifyForDMDefaultOff" /* 15021 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3o2ojh"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["7aYkh1"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = useParentalControlledExplicitContentSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = result2.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = shouldAgeVerifyForDMDefaultOff;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: null };
          obj[0] = AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
          const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
        }
      }
      const ParentalControlledDefaultMessageRequestRestricted = result2.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;