// discord_app/design/components/Sheet/native/ActionSheetIconHeader.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { paddingVertical: 0, flexDirection: "row", alignItems: "center", gap: 12 }, titles: { justifyContent: "center", flex: 1 } });
const result = require("set").fileFinishedImporting("design/components/Sheet/native/ActionSheetIconHeader.native.tsx");

export const ActionSheetIconHeader = function ActionSheetIconHeader(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  const items = [callback(View, { children: icon }), ];
  obj = { style: tmp.titles, children: null };
  const items1 = [callback(Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: title }), ];
  let tmp4Result = null;
  if (null != subtitle) {
    obj = { variant: "text-xs/medium", color: "text-default", children: null };
    obj[2] = subtitle;
    tmp4Result = callback(Text.Text, obj);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  items[1] = closure_4(View, obj);
  obj[1] = items;
  return closure_4(View, obj);
};