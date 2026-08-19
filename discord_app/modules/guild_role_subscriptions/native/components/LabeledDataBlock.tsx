// === Module 14566: LabeledDataBlock ===

// Module 14566 (LabeledDataBlock)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "createTextStyle" /* 6782 */;

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 4 };
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey[2] = {};
createCacheKey[3] = { flexDirection: "row", alignItems: "center", marginBottom: 16 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = callback2();
  const items = [tmp.container, style];
  const obj = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
  const items1 = [callback(Text.Text, obj), ];
  let tmp4Result = null != icon;
  if (tmp4Result) {
    obj1 = { accessibilityRole: "button", onPress: null, children: null };
    obj1[1] = onPressIcon;
    const obj2 = { size: null, source: null };
    obj2[0] = Button.Icon.Sizes.SMALL;
    obj2[1] = icon;
    obj1[2] = callback(Button.Icon, obj2);
    tmp4Result = callback(PressableBase.PressableOpacity, obj1);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  const items2 = [callback(View, obj), ];
  tmp4Result = children;
  if (typeof children === "string") {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.data;
    obj3[1] = children;
    tmp4Result = callback(Button.LegacyText, obj3);
  }
  items2[1] = tmp4Result;
  obj[1] = items2;
  return callback(View, obj);
};