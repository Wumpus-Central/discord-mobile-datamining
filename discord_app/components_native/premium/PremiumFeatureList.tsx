// === Module 9344: PremiumFeatureList ===

// Module 9344 (PremiumFeatureList)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { item: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 8, flexDirection: "row", alignItems: "center" }, label: null, iconMargin: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_NORMAL, require("Themes").colors.TEXT_DEFAULT, 14));
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginEnd: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginEnd: require("Themes").space.PX_16 };
const result = require("ME").fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  let View;
  let noop;
  let dependencyMap;
  let features;
  let require;
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: noop, rowStyle: View } = style);
  let callback;
  callback = createCacheKey();
  const found = features.filter((hidden) => !hidden.hidden);
  return callback(View, {
    style: style.style,
    children: found.map((IconComponent) => {
      let obj = { style: items, children: null };
      items = [lib.item, closure_3];
      obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: lib(IconComponent.IconComponent, obj) };
      obj = { size: "md", color: IconComponent.color, style: items1 };
      items1 = [lib.iconMargin, closure_1];
      const items2 = [lib(outer1_3, obj), ];
      const items3 = [lib.label, noop];
      items2[1] = lib(outer1_0(outer1_1[7]).FormRow.Label, { numberOfLines: 2, style: items3, text: IconComponent.label });
      obj[1] = items2;
      const children = [outer1_5(outer1_3, obj, arg1), ];
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
      return outer1_5(outer1_2.Fragment, { children }, arg1);
    })
  });
};