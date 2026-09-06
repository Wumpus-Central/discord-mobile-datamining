// === Module 9391: PremiumFeatureList ===

// Module 9391 (PremiumFeatureList)
import nativeDefault from "native" /* 576 */;
import Form from "Form" /* 8593 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { item: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 8, flexDirection: "row", alignItems: "center" }, label: null, iconMargin: null };
createStyles = {};
const merged = Object.assign(TextStyles(fn(1074).Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_DEFAULT, 14));
createStyles.label = createStyles;
createStyles.iconMargin = { marginEnd: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: noop, rowStyle: View } = style);
  closure_4 = closure_6();
  const found = features.filter((hidden) => !hidden.hidden);
  return closure_4(View, {
    style: style.style,
    children: found.map((color, index) => {
      let obj = { style: null, children: null };
      const items = [closure_4.item, closure_1_3];
      obj.style = items;
      obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      obj = { size: "md", color: color.color, style: null };
      const items1 = [closure_4.iconMargin, dependencyMap];
      obj.style = items1;
      obj.children = React4(color.IconComponent, obj);
      const items2 = [React4(View, obj), ];
      const obj1 = { numberOfLines: 2, style: null, text: color.label };
      const items3 = [closure_4.label, closure_1_2];
      obj1.style = items3;
      items2[1] = React4(Form.FormRow.Label, obj1);
      obj.children = items2;
      const children = [hasOwnProperty(View, obj, index), ];
      let tmp3 = null;
      if (null != closure_1_0) {
        tmp3 = null;
        if ("" !== tmp2) {
          tmp3 = null;
          if (color.renderSeparatorBelow) {
            tmp3 = tmp2;
          }
        }
      }
      children[1] = tmp3;
      return hasOwnProperty(noop.Fragment, { children }, index);
    })
  });
};