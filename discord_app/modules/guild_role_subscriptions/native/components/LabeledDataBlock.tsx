// discord_app/modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, title: null, data: null, titleSection: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 4 };
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_MEDIUM, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey[2] = {};
createCacheKey[3] = { flexDirection: "row", alignItems: "center", marginBottom: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = {};
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  let children;
  let icon;
  let onPressIcon;
  let style;
  let title;
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.container, style];
  obj = { style: tmp.titleSection, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
  const items1 = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  let tmp4Result = null != icon;
  if (tmp4Result) {
    const obj1 = { accessibilityRole: "button", onPress: null, children: null };
    obj1[1] = onPressIcon;
    const obj2 = { size: null, source: null };
    obj2[0] = tmp5(1297).Icon.Sizes.SMALL;
    obj2[1] = icon;
    obj1[2] = tmp4(tmp5(1297).Icon, obj2);
    tmp4Result = tmp4(tmp5(4812).PressableOpacity, obj1);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  const items2 = [closure_4(View, obj), ];
  tmp4Result = children;
  if (typeof children === "string") {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.data;
    obj3[1] = children;
    tmp4Result = tmp4(tmp5(1297).LegacyText, obj3);
  }
  items2[1] = tmp4Result;
  obj[1] = items2;
  return closure_4(View, obj);
};