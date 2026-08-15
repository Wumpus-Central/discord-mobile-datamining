// discord_app/modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cSb1ub);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cSb1ub);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;