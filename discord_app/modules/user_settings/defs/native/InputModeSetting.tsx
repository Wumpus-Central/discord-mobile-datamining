// === Module 16687: InputModeSetting ===

// Module 16687 (InputModeSetting)
import util from "util" /* 1112 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;

require = fn;
const InputModes = fn(5729).InputModes;
const SettingBuilders = fn(11815);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["pS+K2L"]);
  },
  parent: fn(9414).MobileUserSettings.VOICE,
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
  onPress: fn(10253).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;