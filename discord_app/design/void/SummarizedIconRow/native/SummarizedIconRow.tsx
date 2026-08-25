// === Module 13554: OverflowSquircle ===

// Module 13554 (OverflowSquircle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4376 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function OverflowSquircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.overflowSquircleWrap, style];
  obj = { style: tmp.overflowSquircle, children: null };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj[1] = jsx(Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj[1] = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
}
noopAll;
createCacheKey = { container: { flexDirection: "row", alignItems: "center" }, iconWrapper: { alignItems: "center", justifyContent: "center" }, overflowSquircleWrap: null, overflowSquircle: null, overflowTextOnly: null, overflowCircleWrap: null, overflowCircle: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.md };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
createCacheKey[4] = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let obj2 = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
const result = require("set").fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(items) {
  items = items.items;
  let num = items.max;
  if (num === undefined) {
    num = 8;
  }
  ({ renderItem: View, offsetAmount: jsx, iconWrapperStyle: closure_4, overflowStyle: OverflowSquircle, overflowComponent, style } = items);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  closure_7 = undefined;
  closure_8 = undefined;
  const tmp = callback();
  closure_7 = tmp;
  closure_8 = Math.max(items.length - num, 0);
  let items1 = [tmp.container, style];
  return <View style={items1}>{items.map((arg0, arg1) => {
    if (arg1 < num) {
      if (arg1 === num - 1) {
        if (closure_8 > 0) {
          let obj = { style: null, overflow: null };
          obj = { marginLeft: null };
          obj[0] = closure_3;
          items = [obj, closure_5];
          obj[0] = items;
          obj[1] = tmp2 + 1;
          let tmp7 = closure_1_3(overflowComponent, obj, arg1);
        }
        return tmp7;
      }
      const _Math = Math;
      tmp7 = null;
      if (arg0) {
        let items1 = [iconWrapper.iconWrapper, closure_4, ];
        if (0 !== arg1) {
          obj1 = { marginLeft: null };
          obj1[0] = closure_3;
          obj = obj1;
        } else {
          obj = {};
        }
        const obj2 = { style: null, children: null };
        items1[2] = obj;
        obj2[0] = items1;
        items1 = callback(arg0, arg1 === tmp6);
        obj2[1] = items1;
        closure_1_3(closure_1_2, obj2, arg1);
        const tmp8 = closure_1_3;
        const tmp9 = closure_1_2;
      }
    }
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
  let obj = { style: items, children: null };
  items = [tmp.overflowCircleWrap, style];
  obj = { style: tmp.overflowCircle, children: null };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj[1] = jsx(Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj[1] = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
};