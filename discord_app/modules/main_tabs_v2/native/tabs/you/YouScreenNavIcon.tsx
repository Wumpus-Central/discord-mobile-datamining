// === Module 15647: str2 ===

// Module 15647 (str2)
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import isYouNavFloating from "isYouNavFloating";
import { ICON_SIZE } from "getIconSize";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import { colors } from "Themes";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import createCacheKey from "createCacheKey";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
isYouNavFloating = isYouNavFloating.isYouNavFloating();
let tmp4 = isYouNavFloating ? ICON_SIZE.md : ICON_SIZE.sm;
let str = "sm";
if (isYouNavFloating.isYouNavFloating()) {
  str = "md";
}
const result = (require("Themes").space.PX_32 - tmp4) / 2;
isYouNavFloating = isYouNavFloating.isYouNavFloating();
let closure_8 = isYouNavFloating ? colors.TEXT_DEFAULT : colors.WHITE;
let str2 = "text-overlay-light";
if (isYouNavFloating.isYouNavFloating()) {
  str2 = "text-default";
}
let num = 6;
if (isYouNavFloating.isYouNavFloating()) {
  num = 8;
}
let num2 = 2;
if (isYouNavFloating.isYouNavFloating()) {
  num2 = 4;
}
let obj = { shape: require("SolidCutout").CutoutShape.Circle, x: tmp4 - num - num2, y: -num2, size: num + 2 * num2 };
let items = [obj];
let prop;
if (!isYouNavFloating.isYouNavFloating()) {
  prop = require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
}
obj = { backgroundColor: prop, borderRadius: require("Themes").modules.button.BORDER_RADIUS, marginHorizontal: require("Themes").space.PX_4, flexDirection: null, alignItems: "center", padding: null, overflow: null };
let str3 = "row";
if (isYouNavFloating.isYouNavFloating()) {
  str3 = "column";
}
obj[3] = str3;
obj[5] = result;
isYouNavFloating = { container: obj, label: null, dot: null, nitroSlant: null, nitroSlantLarge: null, nitroSlantSmall: null };
obj[6] = "hidden";
let PX_4;
if (!isYouNavFloating.isYouNavFloating()) {
  PX_4 = require("Themes").space.PX_4;
}
isYouNavFloating = { marginLeft: PX_4, marginTop: null };
let PX_41;
if (isYouNavFloating.isYouNavFloating()) {
  PX_41 = require("Themes").space.PX_4;
}
isYouNavFloating[1] = PX_41;
isYouNavFloating[1] = isYouNavFloating;
isYouNavFloating = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: require("Themes").radii.round, height: num, width: num, position: "absolute", right: 0, top: 0 };
isYouNavFloating[2] = isYouNavFloating;
isYouNavFloating = { backgroundColor: require("Themes").colors.WHITE, transform: items1, position: "absolute", height: "200%", opacity: 0.15 };
items1 = [{ rotate: "30deg" }];
isYouNavFloating[3] = isYouNavFloating;
isYouNavFloating = { width: require("Themes").space.PX_12, left: "75%" };
isYouNavFloating[4] = isYouNavFloating;
isYouNavFloating = { width: require("Themes").space.PX_8, left: "45%" };
isYouNavFloating[5] = isYouNavFloating;
isYouNavFloating = createCacheKey.createStyles(isYouNavFloating);
const memoResult = importAllResult.memo(importAllResult.forwardRef((showRedDot, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let label;
  let onPress;
  let showNitroSlant;
  ({ accessibilityLabel, label, showNitroSlant } = showRedDot);
  ({ onPress, IconComponent } = showRedDot);
  if (showNitroSlant === undefined) {
    showNitroSlant = false;
  }
  let flag = showRedDot.showRedDot;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = isYouNavFloating();
  let obj = { size: str, color: closure_8 };
  const tmp3 = callback(IconComponent, obj);
  let tmp4 = tmp3;
  if (flag) {
    obj = { children: null };
    obj = { cutouts: null, children: null };
    obj[0] = items;
    obj[1] = tmp3;
    items = [tmp2(importDefault(7974), obj), ];
    const obj1 = { style: null };
    obj1[0] = tmp.dot;
    items[1] = tmp2(View, obj1);
    obj[0] = items;
    tmp4 = callback2(View, obj);
  }
  let tmp10;
  if (flag) {
    const obj2 = { text: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj2[0] = intl.string(require(1236) /* getSystemLocale */.t.y2b7CA);
    tmp10 = obj2;
  }
  const obj3 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: null, children: null };
  obj3[6] = importDefault(712).space.PX_8;
  if (showNitroSlant) {
    let tmp14Result = tmp14(15638);
    showNitroSlant = !tmp14Result.isYouNavFloating();
  }
  if (showNitroSlant) {
    const obj4 = { children: null };
    const obj5 = { style: null };
    const items1 = [, ];
    ({ nitroSlant: arr2[0], nitroSlantSmall: arr2[1] } = tmp);
    obj5[0] = items1;
    const items2 = [tmp2(View, obj5), ];
    const obj6 = { style: null };
    const items3 = [, ];
    ({ nitroSlant: arr4[0], nitroSlantLarge: arr4[1] } = tmp);
    obj6[0] = items3;
    items2[1] = tmp2(View, obj6);
    obj4[0] = items2;
    showNitroSlant = tmp13(closure_6, obj4);
  }
  const items4 = [showNitroSlant, tmp4, ];
  if (null != label) {
    const obj7 = { style: null, variant: null, color: null, maxFontSizeMultiplier: 2, children: null };
    obj7[0] = tmp.label;
    tmp14Result = tmp14(15638);
    str = "text-sm/semibold";
    if (tmp14Result.isYouNavFloating()) {
      str = "text-xs/semibold";
    }
    obj7[1] = str;
    obj7[2] = str2;
    if (label == null) {
      label = accessibilityLabel;
    }
    obj7[4] = label;
    let tmp2Result = tmp2(tmp14(4189).Text, obj7);
  } else {
    tmp2Result = null;
    const tmp14Result1 = tmp14(15638);
  }
  items4[2] = tmp2Result;
  obj3[7] = items4;
  return callback2(require(8240) /* TwinButtons */.PressableScale, obj3);
}));
const result1 = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;