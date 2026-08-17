// discord_app/modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 5428 */;
import useSelectedTeen from "useSelectedTeen" /* 7623 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import result2 from "result" /* 14182 */;
import shouldAgeVerifyForDMDefaultOff from "shouldAgeVerifyForDMDefaultOff" /* 15021 */;
import closure_3 from "freshTeenActivityWithMap" /* 5296 */;
import createToggle from "createToggle" /* 10669 */;

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
          obj[0] = tmp2(5254).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
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