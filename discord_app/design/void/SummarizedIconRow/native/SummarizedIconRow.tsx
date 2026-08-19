// === Module 13461: OverflowSquircle ===

// Module 13461 (OverflowSquircle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function OverflowSquircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = callback();
  const items = [tmp.overflowSquircleWrap, style];
  const obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj[1] = jsx(Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj[1] = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
}
noopAll;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.md };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
createCacheKey[4] = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(max) {
  let items = max.items;
  let num = max.max;
  if (num === undefined) {
    num = 8;
  }
  ({ renderItem: View, offsetAmount: jsx, iconWrapperStyle: closure_4, overflowStyle: OverflowSquircle, overflowComponent, style } = max);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  let tmp = callback();
  closure_7 = tmp;
  closure_8 = Math.max(items.length - num, 0);
  let items1 = [tmp.container, style];
  return <View style={items1}>{items.map((item, index) => {
    if (index < num) {
      if (index === tmp - 1) {
        if (closure_8 > 0) {
          let obj = { marginLeft: null };
          obj[0] = closure_3;
          items = [obj, closure_5];
          obj[0] = items;
          obj[1] = tmp2 + 1;
          let tmp7 = <overflowComponent key={index} marginLeft={null} />;
        }
        return tmp7;
      }
      const _Math = Math;
      tmp7 = null;
      if (item) {
        let items1 = [iconWrapper.iconWrapper, closure_4, ];
        if (0 !== index) {
          obj1 = { marginLeft: null };
          obj1[0] = closure_3;
          obj = obj1;
        } else {
          obj = {};
        }
        const obj2 = { style: null, children: null };
        items1[2] = obj;
        obj2[0] = items1;
        items1 = callback(item, index === tmp6);
        obj2[1] = items1;
        <View key={index} style={null}>{null}</View>;
      }
    }
    tmp = num;
  })}</View>;
};
export const OverflowText = function OverflowText(arg0) {
  ({ overflow, style } = arg0);
  let obj = { style: null, children: null };
  const items = [callback().overflowTextOnly, style];
  obj[0] = items;
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj[1] = jsx(Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
};
export const OverflowTextSmall = function OverflowTextSmall(arg0) {
  ({ overflow, style } = arg0);
  let obj = { style: null, children: null };
  const items = [callback().overflowTextOnly, style];
  obj[0] = items;
  obj = { variant: "text-xxs/medium", children: "+" + overflow };
  obj[1] = jsx(Text.Text, { variant: "text-xxs/medium", children: "+" + overflow });
  return <View variant="text-xxs/medium">{"+" + overflow}</View>;
};
export const OverflowCircle = function OverflowCircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = callback();
  const items = [tmp.overflowCircleWrap, style];
  const obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj[1] = jsx(Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj[1] = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
};