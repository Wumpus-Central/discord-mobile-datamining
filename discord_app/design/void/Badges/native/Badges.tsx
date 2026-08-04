// discord_app/design/void/Badges/native/Badges.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { base: null, danger: null, info: null, brand: null, expressive: null };
createCacheKey = { borderRadius: require("Themes").radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BADGE_NOTIFICATION_BACKGROUND };
const obj1 = { backgroundColor: require("Themes").colors.BADGE_NOTIFICATION_BACKGROUND };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_260 };
const obj3 = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_260 };
createCacheKey[4] = { backgroundColor: require("Themes").colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj5 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: null, infoText: null, brandText: null, expressiveText: null };
const obj4 = { backgroundColor: require("Themes").colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
obj5[1] = { color: require("Themes").colors.WHITE };
createCacheKey = { color: require("Themes").colors.WHITE };
obj5[2] = createCacheKey;
const obj6 = { color: require("Themes").colors.WHITE };
obj5[3] = { color: require("Themes").unsafe_rawColors.BRAND_560 };
const obj8 = { color: require("Themes").unsafe_rawColors.BRAND_560 };
obj5[4] = { color: require("Themes").colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
let closure_5 = createCacheKey.createStyles(obj5);
const obj10 = { DANGER: "danger", INFO: "info", BRAND: "brand", EXPRESSIVE: "expressive", NORMAL: "normal" };
const obj9 = { color: require("Themes").colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj10;
export const TextBadge = function TextBadge(color) {
  let style;
  let text;
  let textStyle;
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj10.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = createCacheKey();
  const tmp3 = callback();
  const obj = { style: items, children: null };
  items = [tmp2.base, tmp2[DANGER], style];
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  obj[1] = jsx(require(4189) /* Text */.Text, { variant: "text-xs/bold", style: items1, children: text });
  return <View style={items}>{null}</View>;
};