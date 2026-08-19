// === Module 14720: slider ===

// Module 14720 (slider)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import noop from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { jsx } from "jsxProd" /* 21 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["TYyfO/"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(Button.BetaTag, { size: Button.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return React.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: callback(13813).setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: callback2(callback(14658).CircleMinusIcon, {}), endIcon: callback2(callback(9545).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default createToggle;