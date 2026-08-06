// discord_app/modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx
import { useFontScaleStore } from "DEFAULT_FONT_SCALE_STORE_STATE";
import createToggle from "createToggle";
import { isIterable } from "../../../../../_runtime/03897_isIterable.js";
import { batchUpdates } from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gFob3e);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, isIterable.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const _require = arg0;
    return _batchUpdates.batchUpdates(() => outer1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OU3q8a);
  },
  usePredicate: require("set").isAndroid
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gFob3e);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, isIterable.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const _require = arg0;
    return _batchUpdates.batchUpdates(() => outer1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OU3q8a);
  },
  usePredicate: require("set").isAndroid
};
const result = require("isIterable").fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;