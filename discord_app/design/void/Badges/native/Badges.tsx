// === Module 14401: Badges/Badges ===

// Module 14401 (Badges/Badges)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4718 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let createStyles = fn(4722);
let obj2 = { base: { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 }, danger: null, info: null, brand: null, expressive: null };
const obj3 = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
obj2.danger = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
const obj4 = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj2.info = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.brand = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 };
const obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 };
obj2.expressive = { backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
let closure_4 = createStyles.createStyles(obj2);
createStyles = fn(4722);
const obj9 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: null, infoText: null, brandText: null, expressiveText: null };
const obj7 = { backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
obj9.dangerText = { color: nativeDefault.colors.WHITE };
const obj10 = { color: nativeDefault.colors.WHITE };
obj9.infoText = { color: nativeDefault.colors.WHITE };
const obj11 = { color: nativeDefault.colors.WHITE };
obj9.brandText = { color: nativeDefault.unsafe_rawColors.BRAND_560 };
const obj12 = { color: nativeDefault.unsafe_rawColors.BRAND_560 };
obj9.expressiveText = { color: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
let closure_5 = createStyles.createStyles(obj9);
const obj14 = { DANGER: "danger", INFO: "info", BRAND: "brand", EXPRESSIVE: "expressive", NORMAL: "normal" };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj14;
export const TextBadge = function TextBadge(color) {
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj14.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = closure_4();
  const tmp3 = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp2.base, tmp2[DANGER], style];
  obj.style = items;
  const obj2 = { variant: "text-xs/bold", style: null, children: text };
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  obj2.style = items1;
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: null, children: text });
  return <View style={null}>{null}</View>;
};