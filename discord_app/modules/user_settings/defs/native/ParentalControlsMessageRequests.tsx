// === Module 15735: toggle ===

// Module 15735 (toggle)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2368 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8701 */;
import useSelectedTeen from "useSelectedTeen" /* 8793 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14668 */;
import result2 from "result" /* 14669 */;
import shouldAgeVerifyForDMDefaultOff from "shouldAgeVerifyForDMDefaultOff" /* 15721 */;
import closure_3 from "freshTeenActivityWithMap" /* 7292 */;
import createToggle from "createToggle" /* 11292 */;

require = arg1;
createToggle = {
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
    const obj = useParentalControlledExplicitContentSettings;
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
          obj[0] = tmp2(8703).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
          const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
          const obj2 = openIncodeAgeVerificationModalDefault;
        }
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = result2.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;