// discord_app/components_native/premium/PremiumFeatureList.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Form from "../../design/void/Form/native/index.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import TextStyles from "../../modules/rebrand/native/TextStyles.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  item: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  label: null,
  iconMargin: null,
};
const merged = Object.assign(TextStyles(fn(1074).Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.label = {};
obj2.iconMargin = { marginEnd: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: noop, rowStyle: View } = style);
  closure_4 = closure_6();
  const found = features.filter((hidden) => !hidden.hidden);
  return closure_4(View, {
    style: style.style,
    children: found.map((color, index) => {
      const obj = { style: null, children: null };
      const items = [closure_4.item, closure_1_3];
      obj.style = items;
      const obj2 = {
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const obj3 = { size: "md", color: color.color, style: null };
      const items1 = [closure_4.iconMargin, dependencyMap];
      obj3.style = items1;
      obj2.children = React4(color.IconComponent, obj3);
      const items2 = [React4(View, obj2)];
      const obj4 = { numberOfLines: 2, style: null, text: color.label };
      const items3 = [closure_4.label, closure_1_2];
      obj4.style = items3;
      items2[1] = React4(Form.FormRow.Label, obj4);
      obj.children = items2;
      const children = [hasOwnProperty(View, obj, index)];
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
    }),
  });
}
