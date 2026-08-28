// discord_app/modules/user_settings/defs/native/ReduceSaturationSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5PWWCY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(Button.BetaTag, { size: Button.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return React.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: callback(14025).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: callback2(callback(14841).CircleMinusIcon, {}), endIcon: callback2(callback(9163).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default createToggle;