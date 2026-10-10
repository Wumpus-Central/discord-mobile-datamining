// === Module 14379: IconPill ===

// Module 14379 (IconPill)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import IconDefault from "Icon" /* 5381 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8596 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { pillContainer: { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, height: 20, paddingHorizontal: 8 }, pillIcon: null, pillText: null };
let obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, height: 20, paddingHorizontal: 8 };
obj2.pillIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4 };
let obj4 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4 };
obj2.pillText = { fontFamily: fn(1096).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { fontFamily: fn(1096).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function IconPill(arg0) {
  const cResult = c.c(18);
  ({ text, source, IconComponent, style, textStyle, accessibilityLabel } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp3.pillContainer) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === IconComponent) {
      if (cResult[4] === source) {
        if (cResult[5] === tmp3.pillIcon) {
          if (cResult[7] === tmp3.pillText) {
            if (cResult[8] === textStyle) {
              let tmp13 = cResult[9];
            }
            if (cResult[10] === accessibilityLabel) {
              if (cResult[11] === tmp13) {
                if (cResult[12] === text) {
                  let tmp14 = cResult[13];
                }
                if (cResult[14] === tmp4) {
                  if (cResult[15] === tmp5) {
                    if (cResult[16] === tmp14) {
                      let tmp18 = cResult[17];
                    }
                    return tmp18;
                  }
                }
                const obj2 = { style: tmp4, children: null };
                const items = [tmp5, tmp14];
                obj2.children = items;
                const tmp21 = hasOwnProperty(View, obj2);
                cResult[14] = tmp4;
                cResult[15] = tmp5;
                cResult[16] = tmp14;
                cResult[17] = tmp21;
                tmp18 = tmp21;
              }
            }
            const obj3 = { style: tmp13, numberOfLines: 1, accessibilityLabel, children: text };
            const tmp17 = React4(LegacyText_LegacyTextDefault, obj3);
            cResult[10] = accessibilityLabel;
            cResult[11] = tmp13;
            cResult[12] = text;
            cResult[13] = tmp17;
            tmp14 = tmp17;
          }
          const items1 = [tmp3.pillText, textStyle];
          cResult[7] = tmp3.pillText;
          cResult[8] = textStyle;
          cResult[9] = items1;
          tmp13 = items1;
        }
      }
    }
    if (null != IconComponent) {
      const obj4 = { size: "xxs", style: tmp3.pillIcon };
      let tmp10 = React4(IconComponent, obj4);
    } else {
      const obj5 = { source, size: IconDefault.Sizes.EXTRA_SMALL, style: tmp3.pillIcon };
      tmp10 = React4(IconDefault, obj5);
    }
    cResult[3] = IconComponent;
    cResult[4] = source;
    source = tmp3.pillIcon;
    cResult[5] = source;
    cResult[6] = tmp10;
  }
  const items2 = [tmp3.pillContainer, style];
  cResult[0] = style;
  cResult[1] = tmp3.pillContainer;
  cResult[2] = items2;
  tmp4 = items2;
}) : (function IconPill(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.pillContainer, style];
  obj.style = items;
  if (null != IconComponent) {
    const obj2 = { size: "xxs", style: tmp.pillIcon };
    let tmp9 = React4(IconComponent, obj2);
    let tmp8 = React4;
  } else {
    const obj3 = { source, size: IconDefault.Sizes.EXTRA_SMALL, style: tmp.pillIcon };
    tmp8 = React4;
    tmp9 = React4(IconDefault, obj3);
  }
  const items1 = [tmp9, ];
  const obj4 = { style: null, numberOfLines: 1, accessibilityLabel, children: text };
  const items2 = [tmp.pillText, textStyle];
  obj4.style = items2;
  items1[1] = tmp8(LegacyText_LegacyTextDefault, obj4);
  obj.children = items1;
  return hasOwnProperty(View, obj);
});