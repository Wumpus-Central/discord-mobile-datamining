// === Module 10896: SlideoutButton ===

// Module 10896 (SlideoutButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import PressableBase from "PressableBase" /* 5068 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import hexToRgba from "hexToRgba" /* 4326 */;

require = arg1;
class SlideoutButton {
  constructor(arg0) {
    ({ title, height } = global);
    ({ onPress, color, IconComponent } = global);
    if (height === undefined) {
      height = 60;
    }
    tmp = closure_6();
    obj = { accessibilityRole: "button", onPress, children: null };
    obj = { style: items, children: null };
    items = [, ];
    items[0] = tmp.button;
    items[1] = { backgroundColor: color, width: 72, height };
    obj1 = { color: require("Themes").colors.WHITE };
    items1 = [, ];
    items1[0] = jsx(IconComponent, obj1);
    obj2 = { style: tmp.buttonText, children: title.toUpperCase() };
    items1[1] = jsx(require("Button").LegacyText, obj2);
    obj[1] = items1;
    obj[2] = jsxs(View, obj);
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }, buttonText: null };
createCacheKey = { color: null, fontSize: 12, fontFamily: null, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
createCacheKey[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.WHITE, 0.6);
createCacheKey[2] = require("ME").Fonts.PRIMARY_SEMIBOLD;
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
SlideoutButton.width = 72;
const result = require("set").fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default SlideoutButton;