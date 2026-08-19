// === Module 13546: BadgeColors ===

// Module 13546 (BadgeColors)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
createCacheKey = { base: null, danger: null, info: null, brand: null, expressive: null };
createCacheKey = { borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
const obj1 = { backgroundColor: ThemesDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_260 };
const obj3 = { backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_260 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj5 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: null, infoText: null, brandText: null, expressiveText: null };
const obj4 = { backgroundColor: ThemesDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
obj5[1] = { color: ThemesDefault.colors.WHITE };
createCacheKey = { color: ThemesDefault.colors.WHITE };
obj5[2] = createCacheKey;
const obj6 = { color: ThemesDefault.colors.WHITE };
obj5[3] = { color: ThemesDefault.unsafe_rawColors.BRAND_560 };
const obj8 = { color: ThemesDefault.unsafe_rawColors.BRAND_560 };
obj5[4] = { color: ThemesDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
let closure_5 = createCacheKey.createStyles(obj5);
const obj10 = { DANGER: "danger", INFO: "info", BRAND: "brand", EXPRESSIVE: "expressive", NORMAL: "normal" };
const obj9 = { color: ThemesDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj10;
export const TextBadge = function TextBadge(color) {
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj10.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = callback();
  const tmp3 = callback2();
  const obj = { style: items, children: null };
  items = [tmp2.base, tmp2[DANGER], style];
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  obj[1] = jsx(Text.Text, { variant: "text-xs/bold", style: items1, children: text });
  return <View style={items}>{null}</View>;
};