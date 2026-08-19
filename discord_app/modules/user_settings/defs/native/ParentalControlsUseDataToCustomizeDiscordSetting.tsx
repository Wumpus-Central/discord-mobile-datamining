// === Module 15044: toggle ===

// Module 15044 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import maybeFetchCollectiblesForInvoicesDefault from "maybeFetchCollectiblesForInvoices" /* 5298 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import { Consents } from "ME" /* 676 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MNKzyg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlledExplicitContentSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
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
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default createToggle;