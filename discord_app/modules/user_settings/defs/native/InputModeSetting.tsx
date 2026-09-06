// === Module 15248: InputModeSetting ===

// Module 15248 (InputModeSetting)
import util from "util" /* 1114 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const InputModes = fn(4585).InputModes;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["pS+K2L"]);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [MediaEngineStore];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.Q8gkVL);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: fn(9983).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default SettingBuilders;