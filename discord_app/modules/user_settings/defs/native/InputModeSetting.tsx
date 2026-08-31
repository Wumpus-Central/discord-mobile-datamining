// === Module 14811: pressable ===

// Module 14811 (pressable)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "_detectH265HardwareDecode" /* 4499 */;
import { InputModes } from "DesktopSources" /* 4512 */;
import createToggle from "createToggle" /* 11031 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["pS+K2L"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [closure_2];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = tmp(1236).intl;
      let stringResult = intl2.string(tmp(1236).t.Q8gkVL);
    } else {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.cHCEOJ);
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
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default createToggle;