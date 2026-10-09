// discord_app/design/void/Badges/native/Badges.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let createStyles = fn(5091);
let obj2 = {
  base: { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 },
  danger: null,
  info: null,
  brand: null,
  expressive: null,
};
let obj3 = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
obj2.danger = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
const obj4 = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj2.info = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.brand = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 };
const obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 };
obj2.expressive = { backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
let closure_4 = createStyles.createStyles(obj2);
createStyles = fn(5091);
const obj9 = {
  text: { textAlign: "center", textTransform: "uppercase" },
  dangerText: null,
  infoText: null,
  brandText: null,
  expressiveText: null,
};
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
const ReactCompilerGating = fn(558);
const obj13 = { color: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj14;
export const TextBadge = ReactCompilerGating.isReactCompilerEnabled()
  ? function TextBadge(arg0) {
      const cResult = c.c(14);
      ({ color, style, text, textStyle } = arg0);
      if (undefined === color) {
        color = obj14.DANGER;
      }
      const tmp5 = closure_4();
      const tmp6 = closure_5();
      const tmp8 = tmp6["" + color + "Text"];
      if (cResult[0] === tmp5[color]) {
        if (cResult[1] === style) {
          if (cResult[2] === tmp5.base) {
            let tmp9 = cResult[3];
          }
          if (cResult[4] === tmp8) {
            if (cResult[5] === textStyle) {
              if (cResult[6] === tmp6.text) {
                let tmp10 = cResult[7];
              }
              if (cResult[8] === tmp10) {
                if (cResult[9] === text) {
                  let tmp11 = cResult[10];
                }
                if (cResult[11] === tmp9) {
                  if (cResult[12] === tmp11) {
                    let tmp14 = cResult[13];
                  }
                  return tmp14;
                }
                const obj2 = { style: tmp9, children: tmp11 };
                const tmp17 = <View style={tmp9}>{tmp11}</View>;
                cResult[11] = tmp9;
                cResult[12] = tmp11;
                cResult[13] = tmp17;
                tmp14 = tmp17;
              }
              const obj3 = { variant: "text-xs/bold", style: tmp10, children: text };
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
    }
  : function TextBadge(color) {
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
