// === Module 14661: toggle ===

// Module 14661 (toggle)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isIterable from "isIterable" /* 4006 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import DEFAULT_FONT_SCALE_STORE_STATE from "DEFAULT_FONT_SCALE_STORE_STATE" /* 14609 */;
import createToggle from "createToggle" /* 10669 */;

const useFontScaleStore = DEFAULT_FONT_SCALE_STORE_STATE.useFontScaleStore;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gFob3e);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, isIterable.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const _require = arg0;
    return _require(705).batchUpdates(() => useFontScaleStore.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OU3q8a);
  },
  usePredicate: obj1322.isAndroid
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;