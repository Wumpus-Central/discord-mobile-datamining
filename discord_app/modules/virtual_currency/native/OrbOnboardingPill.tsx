// === Module 15387: OrbOnboardingPill ===

// Module 15387 (OrbOnboardingPill)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import PressableBase from "PressableBase" /* 5020 */;
import OrbsIcon from "OrbsIcon" /* 10674 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
class OrbOnboardingPill {
  constructor(arg0) {
    flag = global.accessible;
    if (flag === undefined) {
      flag = true;
    }
    tmp3 = closure_0;
    tmp4 = closure_1;
    tmp = closure_4();
    tmp2 = jsxs;
    obj = { onPress: global.onPress, style: tmp.container, accessibilityRole: "button", activeOpacity: 0.8, accessible: flag, accessibilityElementsHidden: !flag, importantForAccessibility: null, children: null };
    str = "no";
    if (flag) {
      str = "auto";
    }
    obj[6] = str;
    items = [, ];
    items[0] = jsx(require("OrbsIcon").OrbsIcon, { size: "sm" });
    obj = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t["9JpRfC"]);
    items[1] = jsx(require("Text").Text, obj);
    obj[7] = items;
    return tmp2(require("PressableBase").PressableOpacity, obj);
  }
}
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
OrbOnboardingPill.displayName = "OrbOnboardingPill";
createCacheKey = { container: null };
createCacheKey = { height: 36, borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, flexShrink: 0, gap: 4 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default OrbOnboardingPill;
export { OrbOnboardingPill };