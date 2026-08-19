// === Module 14594: pressable ===

// Module 14594 (pressable)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { InputModes } from "DesktopSources" /* 4529 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["pS+K2L"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [closure_2];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = getSystemLocale.intl;
      let stringResult = intl2.string(getSystemLocale.t.Q8gkVL);
    } else {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: require("handleInputModePress").handleInputModePress,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default createToggle;