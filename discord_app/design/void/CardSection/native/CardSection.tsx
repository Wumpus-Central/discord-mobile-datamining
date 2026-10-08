// === Module 8571: CardSection ===

// Module 8571 (CardSection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8572 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5902 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: null, card: null };
obj2.title = TextStyles(fn(1085).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true, marginBottom: 6 });
obj2.card = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CardSection(arg0) {
  const cResult = c.c(18);
  ({ title, children, headerComponent, titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp3.container) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.title) {
      if (cResult[4] === title) {
        if (cResult[5] === titleStyle) {
          let tmp5 = cResult[6];
        }
        let tmp10 = null;
        if (null != headerComponent) {
          tmp10 = headerComponent;
        }
        if (cResult[7] === cardStyle) {
          if (cResult[8] === children) {
            if (cResult[9] === tmp3.card) {
              let tmp11 = cResult[10];
            }
            if (cResult[11] === accessibilityLabel) {
              if (cResult[12] === accessibilityRole) {
                if (cResult[13] === tmp4) {
                  if (cResult[14] === tmp5) {
                    if (cResult[15] === tmp10) {
                      if (cResult[16] === tmp11) {
                        let tmp15 = cResult[17];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
            const obj2 = { style: tmp4, accessibilityRole, accessibilityLabel, children: null };
            const items = [tmp5, tmp10, tmp11];
            obj2.children = items;
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
          const obj3 = { style: null, children: null };
          const items1 = [tmp3.card, cardStyle];
          obj3.style = items1;
          obj3.children = children;
          tmp12 = React4(View, obj3);
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
      const obj4 = { style: null, accessibilityRole: "header", children: null };
      const items2 = [tmp3.title, titleStyle];
      obj4.style = items2;
      obj4.children = title;
      tmp6 = React4(LegacyText_LegacyTextDefault, obj4);
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
}) : (function CardSection(arg0) {
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = closure_6();
  const obj = { style: null, accessibilityRole, accessibilityLabel, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  let tmp4 = null;
  if (null != title) {
    const obj2 = { style: null, accessibilityRole: "header", children: null };
    const items1 = [tmp.title, titleStyle];
    obj2.style = items1;
    obj2.children = title;
    tmp4 = React4(LegacyText_LegacyTextDefault, obj2);
  }
  const items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    const obj3 = { style: null, children: null };
    const items3 = [tmp.card, cardStyle];
    obj3.style = items3;
    obj3.children = children;
    tmp9 = React4(View, obj3);
  }
  items2[2] = tmp9;
  obj.children = items2;
  return hasOwnProperty(View, obj);
});