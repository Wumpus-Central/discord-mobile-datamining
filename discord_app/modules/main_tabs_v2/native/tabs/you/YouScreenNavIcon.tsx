// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { TwinButtons } from "../../../../../design/components/experimental/native.tsx";
import { SolidCutout } from "../../../../../design/components/Icon/native/ClipView.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const md = require("getIconSize").ICON_SIZE.md;
const result = (require("Themes").space.PX_32 - md) / 2;
const TEXT_DEFAULT = require("Themes").colors.TEXT_DEFAULT;
let obj = { shape: require("SolidCutout").CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [obj];
obj = { container: null, label: null, dot: null };
obj[0] = { borderRadius: require("Themes").modules.button.BORDER_RADIUS, marginHorizontal: require("Themes").space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
createCacheKey = { marginTop: require("Themes").space.PX_4 };
obj[1] = createCacheKey;
let obj1 = { borderRadius: require("Themes").modules.button.BORDER_RADIUS, marginHorizontal: require("Themes").space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
obj[2] = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: require("Themes").radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
let closure_8 = createCacheKey.createStyles(obj);
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: require("Themes").radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
const memoResult = importAllResult.memo(importAllResult.forwardRef((arg0, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let label;
  let onPress;
  let showRedDot;
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
    items = [tmp2(SolidCutout, obj), ];
    const obj1 = { style: null };
    obj1[0] = tmp.dot;
    items[1] = tmp2(View, obj1);
    obj[0] = items;
    tmp4 = callback2(View, obj);
  }
  let tmp10;
  if (showRedDot) {
    const obj2 = { text: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj2[0] = intl.string(getSystemLocale /* getSystemLocale */.t.y2b7CA);
    tmp10 = obj2;
  }
  const obj3 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: null, children: null };
  obj3[6] = Themes.space.PX_8;
  const items1 = [tmp4, ];
  const obj4 = { style: tmp.label, variant: "text-xs/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: null };
  if (label == null) {
    label = accessibilityLabel;
  }
  obj4[4] = label;
  items1[1] = callback(Text /* Text */.Text, obj4);
  obj3[7] = items1;
  return callback2(TwinButtons /* TwinButtons */.PressableScale, obj3);
}));
const result1 = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;