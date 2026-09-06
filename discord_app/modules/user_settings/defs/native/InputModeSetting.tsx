// discord_app/modules/user_settings/defs/native/InputModeSetting.tsx
import util from "../../../../intl/index.native.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

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
      const intl2 = tmp(1114).intl;
      let stringResult = intl2.string(tmp(1114).t.Q8gkVL);
    } else {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: fn(9983).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default SettingBuilders;
