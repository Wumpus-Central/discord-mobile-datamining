// discord_app/modules/user_settings/defs/native/AutomaticGainControlSetting.tsx
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "_detectH265HardwareDecode" /* 4497 */;
import createToggle from "createToggle" /* 10669 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cUMdH0);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6EjbvA"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default createToggle;