// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import maybeFetchCollectiblesForInvoicesDefault from "../../../parent_tools/FamilyCenterActionCreators.tsx";
import useParentalControlledExplicitContentSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import closure_3 from "../../../parent_tools/FamilyCenterStore.tsx";
import { Consents } from "../../../../Constants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MNKzyg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlledExplicitContentSettings.useParentalControlledConsent(Consents.PERSONALIZATION)
      .hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      maybeFetchCollectiblesForInvoicesDefault.updateTeenConsents(selectedTeenId, items1, items2);
      const obj = maybeFetchCollectiblesForInvoicesDefault;
    }
  },
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx",
);

export default createToggle;
