// === Module 8940: CardSection ===

// Module 8940 (CardSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8941 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let DISPLAY_EXTRABOLD;
let TextStyles;
let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true, marginBottom: 6 }), card: obj2 };
createStyles = createStyles.createStyles;
DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
TextStyles = TextStyles_mod;
obj2 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_6 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessibilityRole;
  let cardStyle;
  let children;
  let headerComponent;
  let items;
  let items1;
  let items2;
  let style;
  let title;
  let titleStyle;
  const obj = react2;
  const cResult = obj.c(18);
  ({ title, children, headerComponent, titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] === style) {
    let tmp4;
    if (cResult[1] === tmp3.container) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.title) {
      if (cResult[4] === title) {
        let tmp5;
        if (cResult[5] === titleStyle) {
          tmp5 = cResult[6];
        }
        let tmp10 = null;
        if (null != headerComponent) {
          tmp10 = headerComponent;
        }
        if (cResult[7] === cardStyle) {
          if (cResult[8] === children) {
            let tmp11;
            if (cResult[9] === tmp3.card) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === accessibilityLabel) {
              if (cResult[12] === accessibilityRole) {
                if (cResult[13] === tmp4) {
                  if (cResult[14] === tmp5) {
                    if (cResult[15] === tmp10) {
                      let tmp15;
                      if (cResult[16] === tmp11) {
                        tmp15 = cResult[17];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
            const obj2 = { style: tmp4, accessibilityRole, accessibilityLabel, children: items };
            items = [tmp5, tmp10, tmp11];
            const tmp18 = hasOwnProperty(View, obj2);
            cResult[11] = accessibilityLabel;
            cResult[12] = accessibilityRole;
            cResult[13] = tmp4;
            cResult[14] = tmp5;
            cResult[15] = tmp10;
            cResult[16] = tmp11;
            cResult[17] = tmp18;
            tmp15 = tmp18;
          }
        }
        let tmp12 = null;
        if (null != children) {
          const obj3 = { style: items1, children };
          items1 = [tmp3.card, cardStyle];
          tmp12 = React3(View, obj3);
        }
        cResult[7] = cardStyle;
        cResult[8] = children;
        cResult[9] = tmp3.card;
        cResult[10] = tmp12;
        tmp11 = tmp12;
      }
    }
    let tmp6 = null;
    if (null != title) {
      const obj4 = { style: items2, accessibilityRole: "header", children: title };
      items2 = [tmp3.title, titleStyle];
      tmp6 = React3(LegacyText_LegacyTextDefault, obj4);
    }
    cResult[3] = tmp3.title;
    cResult[4] = title;
    cResult[5] = titleStyle;
    cResult[6] = tmp6;
    tmp5 = tmp6;
  }
  const items3 = [tmp3.container, style];
  cResult[0] = style;
  cResult[1] = tmp3.container;
  cResult[2] = items3;
  tmp4 = items3;
}) : ((arg0) => {
  let accessibilityLabel;
  let accessibilityRole;
  let cardStyle;
  let children;
  let headerComponent;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  let title;
  let titleStyle;
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = closure_6();
  const obj = { style: items, accessibilityRole, accessibilityLabel, children: items2 };
  items = [tmp.container, style];
  let tmp4 = null;
  if (null != title) {
    const obj2 = { style: items1, accessibilityRole: "header", children: title };
    items1 = [tmp.title, titleStyle];
    tmp4 = React3(LegacyText_LegacyTextDefault, obj2);
  }
  items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    const obj3 = { style: items3, children };
    items3 = [tmp.card, cardStyle];
    tmp9 = React3(View, obj3);
  }
  items2[2] = tmp9;
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default tmp6;