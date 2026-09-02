// === Module 16609: items ===

// Module 16609 (items)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import SolidCutoutDefault from "SolidCutout" /* 8106 */;
import TwinButtons from "TwinButtons" /* 8998 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const md = require("getIconSize").ICON_SIZE.md;
const result = (ThemesDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = ThemesDefault.colors.TEXT_DEFAULT;
let obj = { shape: require("SolidCutout").CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [obj];
obj = { container: { borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, marginHorizontal: ThemesDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result }, label: null, dot: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_4 };
obj[1] = createCacheKey;
let obj1 = { borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, marginHorizontal: ThemesDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
obj[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: ThemesDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
let closure_8 = createCacheKey.createStyles(obj);
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: ThemesDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
const memoResult = importAllResult.memo(importAllResult.forwardRef((arg0, ref) => {
  ({ accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  const tmp = callback3();
  let obj = { size: "md", color: TEXT_DEFAULT };
  const tmp3 = callback(IconComponent, obj);
  let tmp4 = tmp3;
  if (showRedDot) {
    obj = { children: null };
    obj = { cutouts: null, children: null };
    obj[0] = items;
    obj[1] = tmp3;
    items = [tmp2(SolidCutoutDefault, obj), ];
    obj1 = { style: null };
    obj1[0] = tmp.dot;
    items[1] = tmp2(View, obj1);
    obj[0] = items;
    tmp4 = callback2(View, obj);
  }
  let tmp10;
  if (showRedDot) {
    const obj2 = { text: null };
    const intl = getSystemLocale.intl;
    obj2[0] = intl.string(getSystemLocale.t.y2b7CA);
    tmp10 = obj2;
  }
  const obj3 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: ThemesDefault.space.PX_8, children: null };
  const items1 = [tmp4, ];
  const obj4 = { style: tmp.label, variant: "text-xs/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: null };
  if (label == null) {
    label = accessibilityLabel;
  }
  obj4[4] = label;
  items1[1] = callback(Text.Text, obj4);
  obj3[7] = items1;
  return callback2(TwinButtons.PressableScale, obj3);
}));
const result1 = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;