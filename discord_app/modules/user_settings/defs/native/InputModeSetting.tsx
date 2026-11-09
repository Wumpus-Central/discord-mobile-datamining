// === Module 17560: InputModeSetting ===

// Module 17560 (InputModeSetting)
import util from "util" /* 1113 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;

require = fn;
const InputModes = fn(5897).InputModes;
const SettingBuilders = fn(11685);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["pS+K2L"]);
  },
  parent: fn(8503).MobileUserSettings.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    items = [MediaEngineStore];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.Q8gkVL);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: fn(12112).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;