// === Module 14815: slider ===

// Module 14815 (slider)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10516 */;

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
    return React.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: callback(13906).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: callback2(callback(14756).CircleMinusIcon, {}), endIcon: callback2(callback(9677).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default createToggle;