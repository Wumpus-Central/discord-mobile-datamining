// === Module 15315: AndroidClassicChatFontScaleSetting ===

// Module 15315 (AndroidClassicChatFontScaleSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import _mod4184 from "module_4184" /* 4184 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import FontScaleStore from "FontScaleStore" /* 15263 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod4184.shallow);
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