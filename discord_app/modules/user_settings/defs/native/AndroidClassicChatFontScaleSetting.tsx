// discord_app/modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import set2 from "../../../../utils/PlatformUtils.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import isIterable from "../../../../../_runtime/04074_isIterable.js";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import DEFAULT_FONT_SCALE_STORE_STATE from "../../appearance/native/FontScaleStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
    return require("../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
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
    return require("../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OU3q8a);
  },
  usePredicate: set2.isAndroid
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;