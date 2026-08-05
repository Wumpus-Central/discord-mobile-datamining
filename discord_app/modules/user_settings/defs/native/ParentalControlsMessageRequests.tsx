// discord_app/modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { openIncodeAgeVerificationModal } from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import { messagesProxy } from "../../../parent_tools/FamilyCenter.messages.js";
import { useParentalControlledExplicitContentSettings } from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import { useSelectedTeen } from "../../../parent_tools/hooks/useSelectedTeen.tsx";
import { shouldAgeVerifyForDMDefaultOff } from "../../content_and_social/DefaultDMSettingsExperiment.tsx";
import { result } from "../../family_center/ParentalControlledUserSettings.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy["7aYkh1"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
    const obj = useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */;
    const selectedTeenId = useSelectedTeen /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = result /* result */.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = shouldAgeVerifyForDMDefaultOff /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: null };
          obj[0] = tmp2(7722).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
          const result = openIncodeAgeVerificationModal.showAgeVerificationGetStartedModal(obj);
          const obj2 = openIncodeAgeVerificationModal;
        }
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = result /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;