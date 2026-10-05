// === Module 13946: Badges/Badges ===

// Module 13946 (Badges/Badges)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { base: obj2, danger: obj3, info: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, brand: { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 }, expressive: { backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT } };
obj2 = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
({ backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
({ backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 });
({ backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT });
let closure_4 = createStyles(obj);
createStyles = createStyles_mod;
const createStyles2 = createStyles.createStyles;
const obj7 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: { color: nativeDefault.colors.WHITE }, infoText: { color: nativeDefault.colors.WHITE }, brandText: { color: nativeDefault.unsafe_rawColors.BRAND_560 }, expressiveText: { color: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT } };
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.unsafe_rawColors.BRAND_560 });
({ color: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT });
let closure_5 = createStyles2(obj7);
const obj12 = { DANGER: "danger", INFO: "info", BRAND: "brand", EXPRESSIVE: "expressive", NORMAL: "normal" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let style;
  let text;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(14);
  ({ color, style, text, textStyle } = arg0);
  if (undefined === color) {
    color = obj12.DANGER;
  }
  const tmp5 = closure_4();
  const tmp6 = closure_5();
  const tmp8 = tmp6["" + color + "Text"];
  if (cResult[0] === tmp5[color]) {
    if (cResult[1] === style) {
      let tmp9;
      if (cResult[2] === tmp5.base) {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp8) {
        if (cResult[5] === textStyle) {
          let tmp10;
          if (cResult[6] === tmp6.text) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp10) {
            let tmp11;
            if (cResult[9] === text) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === tmp9) {
              let tmp14;
              if (cResult[12] === tmp11) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
            const tmp17 = <View style={tmp9}>{tmp11}</View>;
            cResult[11] = tmp9;
            cResult[12] = tmp11;
            cResult[13] = tmp17;
            tmp14 = tmp17;
          }
          const tmp13 = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp10, children: text });
          cResult[8] = tmp10;
          cResult[9] = text;
          cResult[10] = tmp13;
          tmp11 = tmp13;
        }
      }
      const items = [tmp6.text, tmp8, textStyle];
      cResult[4] = tmp8;
      cResult[5] = textStyle;
      cResult[6] = tmp6.text;
      cResult[7] = items;
      tmp10 = items;
    }
  }
  const items1 = [tmp5.base, tmp5[color], style];
  cResult[0] = tmp5[color];
  cResult[1] = style;
  cResult[2] = tmp5.base;
  cResult[3] = items1;
  tmp9 = items1;
}) : ((color) => {
  let style;
  let text;
  let textStyle;
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj12.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = closure_4();
  const tmp3 = closure_5();
  const items = [tmp2.base, tmp2[DANGER], style];
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  return <View style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj12;
export const TextBadge = tmp5;