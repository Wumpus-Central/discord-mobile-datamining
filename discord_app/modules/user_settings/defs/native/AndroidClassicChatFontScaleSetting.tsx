// discord_app/modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isIterable from "isIterable" /* 4006 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import DEFAULT_FONT_SCALE_STORE_STATE from "DEFAULT_FONT_SCALE_STORE_STATE" /* 14609 */;
import createToggle from "createToggle" /* 10669 */;
import { batchUpdates } from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

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
    return _batchUpdates.batchUpdates(() => closure_1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OU3q8a);
  },
  usePredicate: set2.isAndroid
});
const obj = {
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
    return _batchUpdates.batchUpdates(() => closure_1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OU3q8a);
  },
  usePredicate: set2.isAndroid
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;