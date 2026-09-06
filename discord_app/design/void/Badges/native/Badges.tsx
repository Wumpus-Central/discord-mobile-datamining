// === Module 14182: Badges/Badges ===

// Module 14182 (Badges/Badges)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { base: null, danger: null, info: null, brand: null, expressive: null };
createStyles = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
createStyles.base = createStyles;
createStyles.danger = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
const obj1 = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createStyles.info = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.brand = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 };
const obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 };
createStyles.expressive = { backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
let closure_4 = createStyles.createStyles(createStyles);
fn(4560);
const obj5 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: null, infoText: null, brandText: null, expressiveText: null };
const obj4 = { backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
obj5.dangerText = { color: nativeDefault.colors.WHITE };
createStyles = { color: nativeDefault.colors.WHITE };
obj5.infoText = createStyles;
const obj6 = { color: nativeDefault.colors.WHITE };
obj5.brandText = { color: nativeDefault.unsafe_rawColors.BRAND_560 };
const obj8 = { color: nativeDefault.unsafe_rawColors.BRAND_560 };
obj5.expressiveText = { color: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
let closure_5 = createStyles.createStyles(obj5);
const obj10 = { DANGER: "danger", INFO: "info", BRAND: "brand", EXPRESSIVE: "expressive", NORMAL: "normal" };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj10;
export const TextBadge = function TextBadge(color) {
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj10.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = closure_4();
  const tmp3 = closure_5();
  let obj = { style: null, children: null };
  const items = [tmp2.base, tmp2[DANGER], style];
  obj.style = items;
  obj = { variant: "text-xs/bold", style: null, children: text };
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  obj.style = items1;
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: null, children: text });
  return <View variant="text-xs/bold" style={null}>{text}</View>;
};