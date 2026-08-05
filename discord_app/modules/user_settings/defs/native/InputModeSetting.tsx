import { getSystemLocale } from "../../../../intl/index.native.tsx";
// discord_app/modules/user_settings/defs/native/InputModeSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { InputModes } from "DesktopSources";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["pS+K2L"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [_detectH265HardwareDecode];
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
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("DesktopSources").fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default createToggle;