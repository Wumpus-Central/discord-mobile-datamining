// === Module 13908: IconPill ===

// Module 13908 (IconPill)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import IconDefault from "Icon" /* 5596 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8912 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { pillContainer: obj2, pillIcon: obj3, pillText: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, height: 20, paddingHorizontal: 8 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4 };
obj4 = { fontFamily: Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let accessibilityLabel;
  let items;
  let source;
  let style;
  let text;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(18);
  ({ text, source, IconComponent, style, textStyle, accessibilityLabel } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] === style) {
    let tmp4;
    let tmp10;
    if (cResult[1] === tmp3.pillContainer) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === IconComponent) {
      if (cResult[4] === source) {
        let tmp5;
        if (cResult[5] === tmp3.pillIcon) {
          tmp5 = cResult[6];
        }
        if (cResult[7] === tmp3.pillText) {
          let tmp12;
          if (cResult[8] === textStyle) {
            tmp12 = cResult[9];
          }
          if (cResult[10] === accessibilityLabel) {
            if (cResult[11] === tmp12) {
              let tmp13;
              if (cResult[12] === text) {
                tmp13 = cResult[13];
              }
              if (cResult[14] === tmp4) {
                if (cResult[15] === tmp5) {
                  let tmp17;
                  if (cResult[16] === tmp13) {
                    tmp17 = cResult[17];
                  }
                  return tmp17;
                }
              }
              const obj2 = { style: tmp4, children: items };
              items = [tmp5, tmp13];
              const tmp20 = hasOwnProperty(View, obj2);
              cResult[14] = tmp4;
              cResult[15] = tmp5;
              cResult[16] = tmp13;
              cResult[17] = tmp20;
              tmp17 = tmp20;
            }
          }
          const obj3 = { style: tmp12, numberOfLines: 1, accessibilityLabel, children: text };
          const tmp16 = React3(LegacyText_LegacyTextDefault, obj3);
          cResult[10] = accessibilityLabel;
          cResult[11] = tmp12;
          cResult[12] = text;
          cResult[13] = tmp16;
          tmp13 = tmp16;
        }
        const items1 = [tmp3.pillText, textStyle];
        cResult[7] = tmp3.pillText;
        cResult[8] = textStyle;
        cResult[9] = items1;
        tmp12 = items1;
      }
    }
    if (null != IconComponent) {
      const obj4 = { size: "xxs", style: tmp3.pillIcon };
      tmp10 = React3(IconComponent, obj4);
    } else {
      const obj5 = { source, size: IconDefault.Sizes.EXTRA_SMALL, style: tmp3.pillIcon };
      const tmp9 = IconDefault;
      tmp10 = React3(tmp9, obj5);
    }
    cResult[3] = IconComponent;
    cResult[4] = source;
    cResult[5] = tmp3.pillIcon;
    cResult[6] = tmp10;
    tmp5 = tmp10;
  }
  const items2 = [tmp3.pillContainer, style];
  cResult[0] = style;
  cResult[1] = tmp3.pillContainer;
  cResult[2] = items2;
  tmp4 = items2;
}) : ((IconComponent) => {
  let accessibilityLabel;
  let items;
  let items1;
  let items2;
  let source;
  let style;
  let text;
  let textStyle;
  let tmp8;
  let tmp9;
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.pillContainer, style];
  if (null != IconComponent) {
    const obj2 = { size: "xxs", style: tmp.pillIcon };
    tmp9 = React3(IconComponent, obj2);
    tmp8 = React3;
  } else {
    const obj3 = { source, size: IconDefault.Sizes.EXTRA_SMALL, style: tmp.pillIcon };
    tmp8 = React3;
    const tmp7 = IconDefault;
    tmp9 = React3(tmp7, obj3);
  }
  items1 = [tmp9, ];
  const obj4 = { style: items2, numberOfLines: 1, accessibilityLabel, children: text };
  items2 = [tmp.pillText, textStyle];
  items1[1] = tmp8(LegacyText_LegacyTextDefault, obj4);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default tmp5;