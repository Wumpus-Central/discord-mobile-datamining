// === Module 9356: PremiumFeatureList ===

// Module 9356 (PremiumFeatureList)
import nativeDefault from "native" /* 587 */;
import Form from "Form" /* 8555 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5902 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { item: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 8, flexDirection: "row", alignItems: "center" }, label: null, iconMargin: null };
const merged = Object.assign(TextStyles(fn(1085).Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.label = {};
obj2.iconMargin = { marginEnd: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {};
let obj4 = { marginEnd: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeatureList(iconStyle) {
  const cResult = separator(iconStyle[8]).c(21);
  ({ features, style, separator } = iconStyle);
  iconStyle = iconStyle.iconStyle;
  const labelStyle = iconStyle.labelStyle;
  const rowStyle = iconStyle.rowStyle;
  const tmp2 = closure_6();
  closure_4 = tmp2;
  if (cResult[0] === features) {
    if (cResult[1] === iconStyle) {
      if (cResult[2] === labelStyle) {
        if (cResult[3] === rowStyle) {
          if (cResult[4] === separator) {
            if (cResult[5] === style) {
              if (cResult[6] === tmp2) {
                if (cResult[17] === cResult[7]) {
                  if (cResult[18] === tmp4) {
                    if (cResult[19] === tmp5) {
                      let tmp13 = cResult[20];
                    }
                    return tmp13;
                  }
                }
                let obj2 = { style: cResult[8], children: cResult[9] };
                const tmp15 = closure_4(cResult[7], obj2);
                cResult[17] = cResult[7];
                cResult[18] = cResult[8];
                cResult[19] = cResult[9];
                cResult[20] = tmp15;
                tmp13 = tmp15;
              }
            }
          }
        }
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function w(hidden) {
      return !hidden.hidden;
    };
    cResult[10] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[10];
  }
  const found = features.filter(tmp6);
  if (cResult[11] === iconStyle) {
    if (cResult[12] === labelStyle) {
      if (cResult[13] === rowStyle) {
        if (cResult[14] === separator) {
          if (cResult[15] === tmp2) {
            let tmp8 = cResult[16];
          }
          const mapped = found.map(tmp8);
          cResult[0] = features;
          cResult[1] = iconStyle;
          cResult[2] = labelStyle;
          cResult[3] = rowStyle;
          cResult[4] = separator;
          cResult[5] = style;
          cResult[6] = tmp2;
          cResult[7] = tmp7;
          cResult[8] = style;
          cResult[9] = mapped;
        }
      }
    }
  }
  const fn2 = function x(color, id) {
    const obj = { style: null, children: null };
    const items = [closure_4.item, rowStyle];
    obj.style = items;
    const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj3 = { size: "md", color: color.color, style: null };
    const items1 = [closure_4.iconMargin, iconStyle];
    obj3.style = items1;
    obj2.children = React4(color.IconComponent, obj3);
    const items2 = [React4(View, obj2), ];
    const obj4 = { numberOfLines: 2, style: null, text: color.label };
    const items3 = [closure_4.label, labelStyle];
    obj4.style = items3;
    items2[1] = React4(Form.FormRow.Label, obj4);
    obj.children = items2;
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
    return hasOwnProperty(noop.Fragment, { children }, id);
  };
  cResult[11] = iconStyle;
  cResult[12] = labelStyle;
  cResult[13] = rowStyle;
  cResult[14] = separator;
  cResult[15] = tmp2;
  cResult[16] = fn2;
  tmp8 = fn2;
  let obj = separator(iconStyle[8]);
}) : (function PremiumFeatureList(style) {
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: noop, rowStyle: View } = style);
  closure_4 = closure_6();
  const found = features.filter((hidden) => !hidden.hidden);
  return closure_4(View, {
    style: style.style,
    children: found.map((color, index) => {
      const obj = { style: null, children: null };
      const items = [closure_4.item, closure_1_3];
      obj.style = items;
      const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      const obj3 = { size: "md", color: color.color, style: null };
      const items1 = [closure_4.iconMargin, dependencyMap];
      obj3.style = items1;
      obj2.children = React4(color.IconComponent, obj3);
      const items2 = [React4(View, obj2), ];
      const obj4 = { numberOfLines: 2, style: null, text: color.label };
      const items3 = [closure_4.label, closure_1_2];
      obj4.style = items3;
      items2[1] = React4(Form.FormRow.Label, obj4);
      obj.children = items2;
      const children = [hasOwnProperty(View, obj, index), ];
      let tmp3 = null;
      if (null != closure_1_0) {
        tmp3 = null;
        if ("" !== closure_1_0) {
          tmp3 = null;
          if (color.renderSeparatorBelow) {
            tmp3 = closure_1_0;
          }
        }
      }
      children[1] = tmp3;
      return hasOwnProperty(noop.Fragment, { children }, index);
    })
  });
});