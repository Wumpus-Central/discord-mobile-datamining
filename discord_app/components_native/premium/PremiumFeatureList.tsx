// === Module 8362: PremiumFeatureList ===

// Module 8362 (PremiumFeatureList)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "createTextStyle" /* 5461 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { item: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 8, flexDirection: "row", alignItems: "center" }, label: null, iconMargin: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_NORMAL, ThemesDefault.colors.TEXT_DEFAULT, 14));
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginEnd: ThemesDefault.space.PX_16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginEnd: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: closure_2, rowStyle: View } = style);
  let callback;
  callback = callback2();
  const found = features.filter((hidden) => !hidden.hidden);
  return callback(View, {
    style: style.style,
    children: found.map((IconComponent) => {
      let obj = { style: items, children: null };
      items = [lib.item, closure_3];
      obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: lib(IconComponent.IconComponent, obj) };
      obj = { size: "md", color: IconComponent.color, style: items1 };
      items1 = [lib.iconMargin, closure_1];
      const items2 = [lib(closure_1_3, obj), ];
      const items3 = [lib.label, closure_2];
      items2[1] = lib(closure_1_0(closure_1_1[7]).FormRow.Label, { numberOfLines: 2, style: items3, text: IconComponent.label });
      obj[1] = items2;
      const children = [closure_1_5(closure_1_3, obj, arg1), ];
      let tmp3 = null;
      if (null != closure_0) {
        tmp3 = null;
        if ("" !== tmp2) {
          tmp3 = null;
          if (IconComponent.renderSeparatorBelow) {
            tmp3 = tmp2;
          }
        }
      }
      children[1] = tmp3;
      return closure_1_5(closure_1_2.Fragment, { children }, arg1);
    })
  });
};