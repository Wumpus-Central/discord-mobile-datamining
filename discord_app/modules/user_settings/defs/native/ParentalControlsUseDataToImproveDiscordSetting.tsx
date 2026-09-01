// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx
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
    return intl.string(getSystemLocale.t.XuADY2);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    return useParentalControlledExplicitContentSettings.useParentalControlledConsent(Consents.USAGE_STATISTICS)
      .hasConsented;
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.USAGE_STATISTICS];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.USAGE_STATISTICS];
      }
      maybeFetchCollectiblesForInvoicesDefault.updateTeenConsents(selectedTeenId, items1, items2);
      const obj = maybeFetchCollectiblesForInvoicesDefault;
    }
  },
  unsearchable: true,
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx",
);

export default createToggle;
