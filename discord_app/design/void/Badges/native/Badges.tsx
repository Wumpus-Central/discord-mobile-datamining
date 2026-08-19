// discord_app/design/void/Badges/native/Badges.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../components/Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
let createCacheKey = { borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_260 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj5 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: null, infoText: null, brandText: null, expressiveText: null };
obj5[1] = { color: ThemesDefault.colors.WHITE };
createCacheKey = { color: ThemesDefault.colors.WHITE };
obj5[2] = createCacheKey;
obj5[3] = { color: ThemesDefault.unsafe_rawColors.BRAND_560 };
obj5[4] = { color: ThemesDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
let closure_5 = createCacheKey.createStyles(obj5);
const obj10 = { DANGER: "danger", INFO: "info", BRAND: "brand", EXPRESSIVE: "expressive", NORMAL: "normal" };
const result = require("obj132").fileFinishedImporting("design/void/Badges/native/Badges.tsx");

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