// === Module 17618: AndroidClassicChatFontScaleSetting ===

// Module 17618 (AndroidClassicChatFontScaleSetting)
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod5055 from "module_5055" /* 5055 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import FontScaleStore from "FontScaleStore" /* 17566 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod5055.shallow);
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