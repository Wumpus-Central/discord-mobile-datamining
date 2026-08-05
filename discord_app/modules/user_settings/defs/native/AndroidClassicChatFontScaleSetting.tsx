// discord_app/modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx
import { useFontScaleStore } from "DEFAULT_FONT_SCALE_STORE_STATE";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.gFob3e);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, require("../../../../../_runtime/03898_isIterable.js") /* isIterable */.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const _require = arg0;
    return _require("../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => outer1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OU3q8a);
  },
  usePredicate: require("set").isAndroid
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.gFob3e);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, require("../../../../../_runtime/03898_isIterable.js") /* isIterable */.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const _require = arg0;
    return _require("../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => outer1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OU3q8a);
  },
  usePredicate: require("set").isAndroid
};
const result = require("isIterable").fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;