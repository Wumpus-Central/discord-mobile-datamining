// === Module 15378: AndroidClassicChatFontScaleSetting ===

// Module 15378 (AndroidClassicChatFontScaleSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import _mod4229 from "module_4229" /* 4229 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import FontScaleStore from "FontScaleStore" /* 15326 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod4229.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(isClassicChatFontScaleEnabled) {
    _require = isClassicChatFontScaleEnabled;
    return require("ReactBatchUpdates").batchUpdates(() => useFontScaleStore.setState({ isClassicChatFontScaleEnabled }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = util.intl;
    return intl.string(util.t.OU3q8a);
  },
  usePredicate: PlatformUtils.isAndroid
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;