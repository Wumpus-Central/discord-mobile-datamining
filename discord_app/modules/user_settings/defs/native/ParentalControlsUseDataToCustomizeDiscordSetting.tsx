import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { Consents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.MNKzyg);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return require(13974) /* useParentalControlledExplicitContentSettings */.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
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
      importDefault(6907).updateTeenConsents(selectedTeenId, items1, items2);
      const obj = importDefault(6907);
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default createToggle;