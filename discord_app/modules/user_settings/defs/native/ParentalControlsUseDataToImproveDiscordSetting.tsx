// === Module 15280: toggle ===

// Module 15280 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import maybeFetchCollectiblesForInvoicesDefault from "maybeFetchCollectiblesForInvoices" /* 7217 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14379 */;
import closure_3 from "freshTeenActivityWithMap" /* 7215 */;
import { Consents } from "ME" /* 676 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XuADY2);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    return useParentalControlledExplicitContentSettings.useParentalControlledConsent(Consents.USAGE_STATISTICS).hasConsented;
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
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx");

export default createToggle;