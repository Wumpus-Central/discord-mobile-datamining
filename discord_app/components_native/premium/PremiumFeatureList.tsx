// === Module 9337: PremiumFeatureList ===

// Module 9337 (PremiumFeatureList)
import ThemesDefault from "Themes" /* 712 */;
import Form from "Form" /* 8083 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "createTextStyle" /* 6782 */;

require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_NORMAL, ThemesDefault.colors.TEXT_DEFAULT, 14));
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginEnd: ThemesDefault.space.PX_16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: closure_2, rowStyle: View } = style);
  const callback = callback2();
  const found = features.filter((item, index) => !item.hidden);
  return callback(View, {
    style: style.style,
    children: found.map((item, index) => {
      let obj = { style: items, children: null };
      items = [lib.item, closure_3];
      { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: lib(item.IconComponent, obj) };
      obj = { size: "md", color: item.color, style: items1 };
      items1 = [lib.iconMargin, closure_1];
      const items2 = [lib(View, obj), ];
      const items3 = [lib.label, closure_2];
      items2[1] = lib(Form.FormRow.Label, { numberOfLines: 2, style: items3, text: item.label });
      obj[1] = items2;
      const children = [closure_1_5(View, obj, index), ];
      let tmp3 = null;
      if (null != closure_0) {
        tmp3 = null;
        if ("" !== closure_0) {
          tmp3 = null;
          if (item.renderSeparatorBelow) {
            tmp3 = closure_0;
          }
        }
      }
      children[1] = tmp3;
      return closure_1_5(closure_1_2.Fragment, { children }, index);
    })
  });
};