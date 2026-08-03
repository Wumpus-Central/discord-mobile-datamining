// === Module 9613: SlideoutButton ===

// Module 9613 (SlideoutButton)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";

let c4;
let c5;
const require = arg1;
class SlideoutButton {
  constructor(arg0) {
    ({ title, height } = global);
    ({ onPress, color, IconComponent } = global);
    if (height === undefined) {
      height = 60;
    }
    tmp = jsxs();
    obj = { accessibilityRole: "button", onPress, children: null };
    obj = { style: items, children: null };
    items = [, ];
    items[0] = tmp.button;
    items[1] = { backgroundColor: color, width: 72, height };
    obj1 = { color: null };
    obj1[0] = require("Themes").colors.WHITE;
    items1 = [, ];
    items1[0] = jsx(IconComponent, obj1);
    obj2 = { style: tmp.buttonText, children: null };
    obj2[1] = title.toUpperCase();
    items1[1] = jsx(require("Button").LegacyText, obj2);
    obj[1] = items1;
    obj[2] = jsxs(View, obj);
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }, buttonText: null };
createCacheKey = { color: null, fontSize: 12, fontFamily: null, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
createCacheKey[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.WHITE, 0.6);
createCacheKey[2] = require("ME").Fonts.PRIMARY_SEMIBOLD;
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
SlideoutButton.width = 72;
const result = require("ME").fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default SlideoutButton;