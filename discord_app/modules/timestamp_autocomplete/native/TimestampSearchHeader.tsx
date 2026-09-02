// === Module 12183: useTimestampSearchHeaderHeight ===

// Module 12183 (useTimestampSearchHeaderHeight)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ClockIcon from "ClockIcon" /* 4441 */;
import Text from "Text" /* 4474 */;
import Form from "Form" /* 8372 */;
import map from "map" /* 9102 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ StyleSheet: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let c6 = "text-sm/semibold";
let c7 = "text-sm/medium";
let obj = { container: null, headerRow: null, icon: null, description: null, divider: null };
obj = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj[0] = obj;
obj[1] = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 };
obj[2] = { marginRight: 12 };
obj[3] = { paddingHorizontal: 16, paddingBottom: 12 };
createCacheKey = { marginLeft: 0, backgroundColor: ThemesDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
obj[4] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function TimestampSearchHeader() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { accessible: true, accessibilityRole: "header", children: null };
  obj = { style: tmp.headerRow, children: null };
  const items = [callback(ClockIcon.ClockIcon, { size: "sm", style: tmp.icon }), callback(Text.Text, { variant: c6, color: "mobile-text-heading-primary", children: "@time" })];
  obj[1] = items;
  const items1 = [callback2(closure_3, obj), ];
  const obj3 = { style: tmp.description, variant: c7, color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj3[3] = intl.string(getSystemLocale.t.V6L3TV);
  items1[1] = callback(Text.Text, obj3);
  obj[2] = items1;
  const items2 = [callback2(closure_3, obj), callback(Form.FormDivider, { style: tmp.divider })];
  obj[1] = items2;
  return callback2(closure_3, obj);
});
const result = require("set").fileFinishedImporting("modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx");

export default memoResult;
export const useTimestampSearchHeaderHeight = function useTimestampSearchHeaderHeight() {
  const sum = 24 + map.useScaledTextLineHeight(c6);
  const obj = map;
  return sum + map.useScaledTextLineHeight(c7) + 12 + hairlineWidth.hairlineWidth;
};