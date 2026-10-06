// === Module 8923: PremiumFeatureList ===

// Module 8923 (PremiumFeatureList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Form from "Form" /* 8924 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let iconStyle;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { item: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 8, flexDirection: "row", alignItems: "center" }, label: obj2, iconMargin: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3 = { marginEnd: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((iconStyle) => {
  let features;
  let separator;
  let style;
  let obj = separator(iconStyle[8]);
  const cResult = obj.c(21);
  ({ features, style, separator } = iconStyle);
  iconStyle = iconStyle.iconStyle;
  const labelStyle = iconStyle.labelStyle;
  const rowStyle = iconStyle.rowStyle;
  const tmp2 = closure_6();
  let closure_4 = tmp2;
  if (cResult[0] === features) {
    if (cResult[1] === iconStyle) {
      if (cResult[2] === labelStyle) {
        if (cResult[3] === rowStyle) {
          if (cResult[4] === separator) {
            if (cResult[5] === style) {
              let tmp3;
              if (cResult[6] === tmp2) {
                tmp3 = cResult[7];
              }
              if (cResult[17] === tmp3) {
                if (cResult[18] === tmp4) {
                  let tmp8;
                  if (cResult[19] === tmp5) {
                    tmp8 = cResult[20];
                  }
                  return tmp8;
                }
              }
              let obj2 = { style: tmp4, children: tmp5 };
              const tmp10 = closure_4(tmp3, obj2);
              cResult[17] = tmp3;
              cResult[18] = tmp4;
              cResult[19] = tmp5;
              cResult[20] = tmp10;
              tmp8 = tmp10;
            }
          }
        }
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(hidden) {
        return !hidden.hidden;
      }
    }
    cResult[10] = L;
  } else {
    class L {
      constructor(hidden) {
        return !hidden.hidden;
      }
    }
  }
  const found = features.filter(L);
  if (cResult[11] === iconStyle) {
    class L {
      constructor(hidden) {
        return !hidden.hidden;
      }
    }
  }
  const fn = function x(color, id) {
    let items;
    let items1;
    let items2;
    let items3;
    let obj3;
    const obj = { style: items, children: items2 };
    items = [closure_4.item, rowStyle];
    const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: React3(color.IconComponent, obj3) };
    obj3 = { size: "md", color: color.color, style: items1 };
    items1 = [closure_4.iconMargin, iconStyle];
    const Fragment = react.Fragment;
    items2 = [React3(View, obj2), ];
    const obj4 = { numberOfLines: 2, style: items3, text: color.label };
    items3 = [closure_4.label, labelStyle];
    items2[1] = React3(Form.FormRow.Label, obj4);
    const children = [hasOwnProperty(View, obj, id), ];
    let tmp3 = null;
    if (null != separator) {
      tmp3 = null;
      if ("" !== separator) {
        tmp3 = null;
        if (color.renderSeparatorBelow) {
          tmp3 = separator;
        }
      }
    }
    children[1] = tmp3;
    return hasOwnProperty(Fragment, { children }, id);
  };
  cResult[11] = iconStyle;
  cResult[12] = labelStyle;
  cResult[13] = rowStyle;
  cResult[14] = separator;
  cResult[15] = tmp2;
  cResult[16] = fn;
}) : ((style) => {
  let features;
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: react, rowStyle: View } = style);
  style = style.style;
  let closure_4 = closure_6();
  const found = features.filter((hidden) => !hidden.hidden);
  let obj = {
    style,
    children: found.map((color, index) => {
      let items;
      let items1;
      let items2;
      let items3;
      let obj3;
      const obj = { style: items, children: items2 };
      items = [closure_4.item, View];
      const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: React3(color.IconComponent, obj3) };
      obj3 = { size: "md", color: color.color, style: items1 };
      items1 = [closure_4.iconMargin, dependencyMap];
      const Fragment = react.Fragment;
      items2 = [React3(View, obj2), ];
      const obj4 = { numberOfLines: 2, style: items3, text: color.label };
      items3 = [closure_4.label, react];
      items2[1] = React3(Form.FormRow.Label, obj4);
      const children = [hasOwnProperty(View, obj, index), ];
      let tmp3 = null;
      if (null != require) {
        tmp3 = null;
        if ("" !== require) {
          tmp3 = null;
          if (color.renderSeparatorBelow) {
            tmp3 = require;
          }
        }
      }
      children[1] = tmp3;
      return hasOwnProperty(Fragment, { children }, index);
    })
  };
  return closure_4(View, obj);
});
const result = size.fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default tmp6;